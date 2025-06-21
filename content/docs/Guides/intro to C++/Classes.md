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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73ATJYH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM9bZ%2BbH8xz0vN2blmDJblJIFF%2BWISNYkfELH2zTxY5AIhAN6lCHQF6LVJ1jIU99Pzw7POLkdY10cldr6eqKvOcocaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze3ve4r6CkgMhpC9cq3AM853OH09VnDjHzNxplMWWpecX%2FZOarHckVBXD%2FJrBnMCXCEMqNx%2BcWRCrRxnN7NWAaizsyaP7pzUn1u7NO0B%2BY5k0TccGZY5Hv03sywgAkmVwvREZtAVp3U6LdP7UaDvWAvc3fLVElOo8yUtwVcVPu%2FnZDM%2FgJBhprWw78lFSJBz1dP5VkOd3avuC25lJWki5ZmrULDMxy4WuLU4wKq35fSJVFsKVT1DsVltA%2FDlHZRybJG0HpfRCGmLjsRhv%2BLEc%2F3hR20%2BOjtk8yTjKQrwleSzXlvLY0quW9OlPwWFEKKqmdUDm7QEmo7tVhramLmSav%2FKj4TW0bempzbQVdgA3lcIu043%2FREo7%2BfKjcv2jSEgi2oVUinrZjx3vidrA%2B0mKfxRuZpCnN6ZV8GeD2fBAfFleIWsWUPOvAjrwaghc9rbRm4dWmcfe88Mi21mcsPHEX9coTMa8iSk%2BNIW54MChlQlUCmSl6r%2BY6F5eysRURJiE9%2BwnqX0bhpS0jwxVI4AoD%2B7knvVWi0Jlv2eqg7xXrAyoOy1aD58viN0xI4ZCYhwqpJqHnr5Zc41u7pSz1%2F0K4J2OgBWZIyMZsbkup5d9Vj41iEyHjbNgP47rtRgB5Fr8ci2elMCZMJ5KLjjDi1dnCBjqkAVTmdeFb6aY8NlxamuvyL1D3x9yOgGlu1FZ3J%2BU30n8IXcjSmA23LMvxzmMmLsqIe1SiqyrB9%2FV1SLdRz0BQgFXv3EmQSHRoIcKWBFqi3lQZqtCUDbiXsN7P2KTXApkixrkNAsx7tYw0PJAtDQBh2kOdR0OrNanZugZ%2FXnHXWLTal5ueU%2FPcCoPQHvWrZ0Twg5OCgDURtvGBI9LbzxTI0l3R5QZm&X-Amz-Signature=5b106364b134058dc49ef449e4523e71db8f592762b6c18577b69b7b7c7b6e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
