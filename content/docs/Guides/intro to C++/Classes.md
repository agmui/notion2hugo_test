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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF2GN5K%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDexRMeL340rE%2Fc1OUWTmEhuhwhVR9Op3T9KP65pxEtrAiBiyUWZyNN2yfkK0gvqm8%2F%2F%2FJ9cVpEUtHhWmpWneMIxfyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMLt0wyV6KOeOAQSY5KtwD%2FKoUEaoUq7NvuK2T11iWwShQh5QhHwo5O0WbvP6cubwpWfEGOMuRzcn6DUyqWmjl4BgvFAhu%2BRMs2oK%2BTLI9twkTpwNfFz92V5RFeHQSkxhF9sJ3vrZ5nYlPLkQRPN2k8lmTAwdUgQCTRb%2F1TLJBoegMt2pQVNUbYzip4pPM3AHIKi0GY%2FvRRh493SVxVr2co%2BRdYxMd4OseedYDDvQHX5t8wBFn5aw9hN10GpMrUTt8o8IRIOjF2CL3LQD2LFqNWbpGHiojQRDeV0MS0JrFndjQJqHx56Cmaw%2B%2FQRm1TYjkQ1onFsMFbaCPKNJ%2BQc012%2FU93CGNpxN2aCoDlCCYpaUogTeClzWrhTPONFjWQFi1JA%2BNZQqhzt3We4K1rwqLGDTkxVB7SrzQd6h%2BMaYpMnvZNzZOezKxgvksW4n4eMHET1A0RLSV9QKspzdrFNo79jaHW5BHrEDXc2JJZ5PcjQMxewLLzGl2re7DJUWHymtEGKsQvUyYHwTBFt6ppPa2QOw69aXx9%2Bg1GKwqgccoEsfqJDYpufEIPA4KW%2BaAsrzIJ4MUd30cVBzNV%2Bfzp4ucdZfF8ayeGNVHYPPvoAE9HBn7j6Lf4QFB3J758XiSWz%2Fb0MmmQGfREHxfUX0wmM6JvwY6pgGFuxmX9NzFfezaEUz7T87xLs5ild7G8Jw8nWZ8q4mdPD17kBCl%2FUbwgOljjkGUfybd9p2pljaoRvV%2BzJ6xSXAXNYUC%2FVMFc80fjXxxLDDj%2B4hqo14Ap1te23vLOb8SLKV7UDipU6ZnvsZcICxnRoURAj42IkmODL%2BwiyqW45pKQwnupBVwDMEL%2BP4NYcZZgQ7x1%2FxMizQfM%2BGe5UOOrQzLMM6HeuXk&X-Amz-Signature=8a0e66921d4fafe3008d0bf7b4b1513a3249e4921b5c44f1a3faf81835333d83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
