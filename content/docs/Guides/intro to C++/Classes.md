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
      <summary>What is </summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I7GBRO%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCID%2BBYZcOGd3D4nmMk%2FKGPP1GrRul%2Fjy5HPCIc9uVHwojAiEA2t8FQyESW%2B3MRU0ZZGTXsUwJ8C%2BsobuA%2FiESywLW5zgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHMyAiYNm4D7APaKfCrcA2sKeYXofRd%2FYolHSBsXN0GYqlAMTHqIx7eeweReYbgOAoC3%2FBzfPKMwFNFnp3WTZqCUG5Gf70HK3xiwQyM7fcz%2FlkhBmZ3%2BBWZOMTo%2F5Lfz%2FN3VS5AmevicH5vON4L4%2Bx7pzG%2FHi6f9nE5%2BM5oHt22UUB7oPavzCAlCUzo1I7kEL8Oo50rYuGyXWHPqx5uOmzd5dthGmZc1F9E579znpHxdmvebvE2N4J1zoONxrFsRYpuJ2LspE92AMm%2BWDbZxN2BtXzOx6jpuTquEalH9ZxCEH7IKn35znMh1RXclskKIuSqQnUFRCR3uJGI1bUSG2v3u3O0WC6c7A0N6xPex%2BZ7MwC0BDQTUHNwPS%2BkwwNle2L5Tn%2FH7yVNqpqSZuZ2moMdEB2Ibouz45dfT1qvf4lBkgkjbxZaisLmLCXb0sNWbiZMtgBdfK5lHwgGPgRX7qb5Disfk772setWDAatYl3tiQ7BnMF7nskwSuPBqDkw99Y5MkenkTzFYvxB8LNycSB3Zd06ELKLZzge1fpy4BtCq2YvyObcecRFn3KfP8a3BNkdNdhdxWpiH2AqM5m%2FHhNeATMVjrnxw3CFn1usfDaPpolCrj9twP4ePElX9bVGPKHTfaL%2FroMZKjZ4JMPWt3MMGOqUBogdx2EaM4BazJmViJX8ZWfHIyNWYbn2MHRwBDF5qHrpW0PEcVUySuO7VeOng4zG%2FdG6TjUvdBGTmE%2FnauYMxeS5foky9q%2F5mNG12cVdw%2BYLgnWyHDUPmOg9mEuuTzS5l0IcNOL4TQgq9Iv%2BKebI1aP8BCZRniidp%2BlgoBc5kit13ugUTrLVMNUQrKRlwL%2BQNWX5rqFbw8k%2Bzs9oY9oEZaEcNX0Wm&X-Amz-Signature=07a5122dbede08e460e6d7fda45997d262014e2a3fe809d2b71ab36218a6929e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
