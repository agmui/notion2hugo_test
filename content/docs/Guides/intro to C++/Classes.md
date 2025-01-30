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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KZITUP%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe2tmRmAbVCSqbG12dH1fCrSBdQvpYF0XpWBTLolXOdAIgSHe2Wkns4Y0ZsYr4imh1zADlq67Po2tf8DhOQcBcOmEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4z2uvfosHQXYh%2BpCrcA424Wo9Mu8ZQlbfpKRXOs%2BX8kZFoi9Lin9ehMGGO4N8hBTa0Ka7hKq%2BjeU3BCeDt2BosVMRp9GCMmqQjsdWgNJDJhzg6MUNg1a0PbAm%2FH0Ol6bjhSAY3uD1HPE9SaFcqmhrln9ejqVHy9ji402h3kyIHcsIudLdYuoXlsPi3f9YJyEvJID1EAmvmM2wthj4Cxlk164STDNXcLharnti3Ol5bYNCtj8rA4P4AV4g6WZnra0Lx50DjZz7kaQxuz3o4U3dzUHgW8kP6hwNtz1eralhP3i6%2FqoKeSEyL7AV1%2FGtVBQKAMKur6DVkcEcXOgdcQiGdQfSkaOS2w7HPharMRHM9cwphfE9LzGHhCBkN04UJaSlABkJG0yN66txfG3vtFcPQW8bBN9zHyTz3qeDjwpye%2FMipSKQuRq%2BQBYaGbGEfrvxIjnTKcyGsEJhFzZKi7hQ5nxHYFxQYAJmo%2FnsiEGKrjzdxwYVfQ72G%2FYbvbak1DqfrLahZ7SqYfM6N0UhFcrc9NWqz9J38Jg3MDoVXobeN4b1eqd%2FA7bQ5SjhhIj5I1Gr%2BGVLlol1dMuCwKnnhhtUzZEte3mx9kJMjQvo0EW732fPBaOUhSl3LSF5T6JdpbPka4ukfVUIsxXx5MIO067wGOqUBeFHh48fxc2IdNqKnc5oj%2B50QvYZk4o0LQguTU2NbWxE3HCa8caig0OZ1CjK8Tx%2BYr6gV6%2FAwMBE6y6rjPOa7dK6ma2fqXC17AmwafOZFjGuAUrBz4A7abf3jx7vutgNMAzHvdlwCdXmsSTNFczLIuR7WIzLED2Xi7ObwEae7%2FEa4x513T0QBSQtXRduKrSAHCZjga67g0ku8SybMp%2BfWJCCV3tle&X-Amz-Signature=62fd435e8bae939034e6c6e8e8f4ea3192ca68b40bfe3112ed1cd19ad2595136&X-Amz-SignedHeaders=host&x-id=GetObject)

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
