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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZ4QP66%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiWuV2K6FT5V5GX8Gl4LvxNDQ6NqGk7uigzZV2Fr%2FGmAiEAreVCDI3EBIohy478byJg9dihcT7gXJz9pSY82l2UiskqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBmBL8YybdgQBcv%2BircA3MiQ%2FkWH1oAxvfBzfoaWwrwFAttw2SdKQk%2Fs06jUsRPyTyhRHnL8DWE47lM6cJqONywJkcd12WydSMr%2F3UP%2BqRtH%2Bki4YrVrDarGTRTk9MLmsGZp%2BzOwJibOqQsGat4dmXhbP4GI%2B1QtAAy%2FO2xQt3YIgjc6AX0TqAOuZmKOF4UE1Ku3tERTC1f6FkfNxFqcN0x6SVKoc%2FRb9dY3snZOfrq2sqIIvVK4UXTDzY%2BQtnPynALaQCW7VgctPkOd9XX%2BB4%2BMtTNj5IWKsGyMT4ebfstqplHytb%2FefqZy5pfADffq5uGRj8RTfQJWdsWIeYerZz2ymJgQ37NCrhr3W6DYQZWT%2FHIxS36ch%2B9F3AkpZche24l6085dSeesZpFUENwposkkMDN68lyRHktOvZ6yJaiSrlxiNhBZz65HBkrY0sEsZQ8FsB0dZKHKUrxn9lSPZqs4Y4xIMkS%2BxBV%2Fsud%2BjANU%2BWuIKXCaBb6n1KUVleQWNOtaVrWThduHk4COlwiB2%2Feq6urVs%2FZjzzisGp6dLtlrXKZWV8ntiYKCGIHPLryYR8KNowhA0owDdq9009jnnmGfzzDZdRpvpjW08C52Q6VqzvvpYBn1jBJCawKnb%2F05W0qIRo3ckAea4nbMIfgrsEGOqUBWOrjBpjAp3QtX9eLT4KK7%2FOW%2FxQnOAwZBiETp4EqeQ2cgcgsav1YG4pw1Tjt0t1cLDHqwmcO3noatcoGp%2BmkN1b1hcb2gzWUfwyRxP7sfufs2Gkm4vgpRy5i1ljNa1CU8QrgyXibSirSo%2F4%2FHwIm7Oc8HU6Sxtmm6Fu1CnQ2dWDliGJAvhaxqtwotkosgXuVldiQ0O%2BgTOyJL9tzkxa%2BVHYarqTC&X-Amz-Signature=b7401dc9fffcb2ab81ec21a671a118974dd2d7fc1733252e10f6a0c232447a40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
