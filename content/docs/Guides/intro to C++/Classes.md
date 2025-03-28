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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDT6VLZI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8bg%2Fwi%2FFbe49gsPFThDTEavqVRF29rmvizVTaKpT7lAIhALn92%2B0B%2B1Kreojhk%2BULBU87JsxB1K%2F4SIC0bmtmqczUKv8DCGcQABoMNjM3NDIzMTgzODA1Igwykfi1NYNcDadguN4q3ANabBqE8TVXX4%2FZD%2BEK9LJJEs6F1P3H3nya78qw1j3jz2GH1xC7r5%2BI8oAECSfUcFpL6drqwfJWRviI%2BRr1%2BFIrBWF5dWanxPZVNXBdtvrQRYFFtNpwcCqf0kxLu03hLqJzisHZDapfpYcr8GRqbz65S68mljX1LsA1v2R9Kuk%2BCqqK8Oq%2BwKL1Lrd89eJuiMvn7GBNqlEkhR%2BP91PxIOEZBh%2F%2BibTpotr%2FnAunjKQWrV%2BGxzscUlvvjx3ey7J0KfjYCrd%2BRyNUEZKWGMA6ijm8r0WwynLyTRtaDIqOs%2FH60korPzM0QVWVyeqT9XPLEYwHlII871BXlLfyyygCBLVJ6Gc%2FgRUS0nTtbv7eWLAsBARIJWsatIiR8eHL1Yvytqf3RpRl4iYXmZdr773ilUlxRNdDMriqBZjWAD9ckJOqAvGLkRVqfyaVOUIHqcznJBB4k9Tt%2F3gH26UguiLJqc9iM6s7rO0x%2BTROHFascZK%2BhzAK4rA%2BBs5ImCgIxr9ZRV8H6WS89u6qtpV3cxs4ojjfUrVt0lzH4YnrbUFFPiUxNGtej%2BqBi3rHKYPJIlkTXPMyRMb9yePPezIOhlGt2okHHtsUPlIk4ZbtzOaVk2xY4EdlmqWF6s3KllWK5jDCqpy%2FBjqkARQVIEoJugqxM2xXoT%2FGNKtUqo%2BTlyMV3vvZNODxg0QHJHDFh7%2BbhHD7mttCe6euAnXrU0z93GiM5WSQpAglWSwRV4lrNfFzgZuBjuXb2VkLYvNcI3FfFY1g4UbncBazcOfCwyfchjjqU5I0idPtnTA1FIKHdrZ2uW6xLaGiUy%2BQoE2hc8I2ck7HcrSjXte4KGs0tbnRHRKRVgK8oyzJaBs%2FjMfg&X-Amz-Signature=2a2af72079aa87b82a9e350b93d27c5b5b13d408e9d718202c2eeb02970d67b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
