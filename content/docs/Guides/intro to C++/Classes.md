---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
 `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.

</details>



## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWXOXQ5%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDADQbNeVUOlU%2BS%2BS9j12TxHj%2BnEuMAYlaxukoimwB9GQIhAPTofQS%2BZfQ3v40S%2FJEiedhvq7LeykQBOZXNj7TRWVb2Kv8DCCwQABoMNjM3NDIzMTgzODA1Igyk7SXvdIOOl9832Ggq3AO0G1UJt%2BFrOjsvKeCFV6D1fjqxRJDz%2FSqV2NuY%2B9o5Nu6RTpZvz6n6b2av%2FVQE9bRD0tnFokujFlOt3dDaKd7N8cbfCi%2BwjoKqZRuZ2esT%2F8vCa5mcdnDAHNmvtXSCadiTHJiyDb4cjXLQB5Lqir9dhUc9FzZhXZ7qu%2FguFJ%2FvMGHcemCUeYJaYlUHkiutUL4hA9EwRlSRB652pxDEE5wl9CwR9zsSpQlWb1%2Bg4ZlAA8o5z4VszWt8FL0%2Ff9t4oykNtSqsWdCiIjVD7zfEBEFieNX3UXo%2B56yyzghYI9IvRc7GNwTZyGpOAeH9vX5gQ8B9eoB%2BToluAKZ7RH0qzipBnhR4%2Fx17o37uWZpErXJlJiylfXUWkQA0SLS2ZDtoZTIA7k7UWur0y%2F80v3LABDCQBRHtttxzXXXTKQDlX2Kn4kevjfQE2QjWUPgih8cyAW4iWOUmA2XY2yqi%2F8bkWvQYeZwpVj7p60aTKsU0mLXnV8AT%2BDgJeyaRH%2FnPBoAMMq0vPWWEkZGzjnP7NuceFivscAFaQJRuc6TCGXtSNv9n1KMJc%2BfT5fJZCe7VFhQFyC6RLDjVEmr6ZrFOsr2PSru4erbSqHjGsf1QKC8ZHmhgnp%2BFAWAtTOSG1yV2WTD25pXTBjqkASMndI%2FYB0o5Rd4zKE8oPvbBnatumRo7ao7iju8WKDWhSA5exs1aRHkuM1CyTZVO9hCHsBSXxTn%2BifplJA1qOIE5QLRyQXr4PGwGqWNPoL2I1X1zILq4iIifYOFqQ1d9MGalMKo7SGjZFTFjrwwGyF%2BWrWCBf38xjuBVsERzM%2F6FW%2BORyMa4VRrm%2FEYRAWfIaAf2wMe9UDTGjlDSXkS6%2B7p8ojFn&X-Amz-Signature=dd17bfb04eec15c800f100ee36177851dc9fe4a80798062ef645e9a56cb03f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
