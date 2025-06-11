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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPD4GJJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ2cUnzjG9RSa3JsyCcZs415aNKRDiZDi7K6JgwQieZgIhAOJSRO%2FUQxkRcE5CwhAMHCk2Rw6fmAUJNnobfiMeFSgZKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Ht2GiVfsq4AwgLAq3AMYHdy82BisDHP9C3d7fISdywOIKhs5cdCEl2Deh0uRYySiV6vYODp8%2FlBoN1lyUPlRrvPL9TVteJoJIpC%2BXOC72S6BejrHkS5qsthZjQ%2BOIF6af4fZ%2BFSZSq16pTgy2ydMrcNGGRtRhhz0PvvUa9kzdKX0D2SDzHZmQVVqwHbE2TMQ1hwSSxOJ4uhl5x8ZFQOrRX1FU8xDiMozLFFezNSEwk760Q%2FSEGdp44vmdXmKA1udsKORifQrQTT9CJuYMAHlYczp4W16QwcleRBARaBNSfsh5Ud%2Fa4hgGSOHY94qkHvCn0cwTM56qdDKXGYAVrhRzbqzLrn0B%2F3bpIvGMaEMtokuaAL9f1qeHmbsxqcSdsSgQJnfDa9eAPy7DHiHJ1Pd9mpi0TvFEIEuPVKwtr4%2F1OBJnJkIO0RzsY5sFz1W5cpsaoalViYwIX7g7uW9SYY%2FrnsPhH%2BWgwngHVlQ7Dii1uBbUkX7gNOjIc49SJh49kQi8Fov6H8S2iHQ9YGtpjYGsdhvFBhdp9JKGrhR5AOy056aJGaJguU1weFLR2XdiedUY4P3XiFFXH7M%2FFnqAoTi%2B%2FPBu7FCQImSTp0RxQuw9iHLMbSOebLy6Sei2MJPry2JUPM%2F8GmrT%2FL3xzCr5aXCBjqkAfDGXotF%2FYNjq0F2OAG3NTUnMUkN3xcjsdOUiCSqXfA%2FyQx6zr%2ByhLQkTliDh2jXFdEsTU1m8nQ6sJ2%2Bj8rurz9BlT1yn3x34fHJe3qA%2BCrV5H4Giz3HTmKdrMRWZAt0FklujwJH23rRirsT7%2Bph2KFlwH%2FSm0QXBTUNitZH4QBieAqNjPuyiV38S38jgEyVrnaen0M%2BWTxLXaO9jyJ3XgyJvIoG&X-Amz-Signature=3e82e9645b4a1753bb8e4a345f7d52ae2d1308a8b8d4e19354daa036261a385f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
