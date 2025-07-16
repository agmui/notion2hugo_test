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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5UJZ3W%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHDcbzNSRQN%2BScIG3u0wYO3NFvCurwl5iqHfjuQ1UH0eAiAHGz2XCOF2KPiON64kSjJ7w3UOH9q2yIz7RnodkjIhQir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMHu9ZVDgZJ3fKGCEwKtwD1uFHe5G0idqH9%2BS9NICBBFVNof8Ie%2FMNBFL%2BtOkP4Zz6Z%2Fz1GlLTu5VSY%2F8R%2F8loBXi4lSqpQgWfv3MlsMkukiuPkHE6sIv3OG5QlAnoF1waWjLTg3vZxMMNgDYxfzE7zwmnrCWLfryTKGas7vCyt4K1jsX%2BGq%2FC7cr1xGxqe7gVZbcEOOcUVMlD5nHyjFgQx8%2FUnQw59Ikt0K5Ic2ZLF7xLLDl4zIpDQ92Zu9UvEZk7n%2Fz%2BsYvTDhfYcZPg8CX3LJoIMB%2FVHz339WUl%2Fg0uiTBYEBVx5Qo2sx6hGAN%2Fg1gSUs9Zg6ERw40Ez8Fopwfa%2BH4FJnLJCLH3XHRgSwSrcnKeSOc9dsQNR20iF%2BhBboZX0rndX1sqGdVfNiaNLq7gSo6BmgUc6vvNuz4Yp0yfgI0MgxhtaeGpwU0Ki3h5C0kVemYBPEvwQAe8Vbw7VLYNoh4t77Vz4%2BUCpUNShgIVcg%2FfQ%2Beqo7kfF0lbiWAlC0%2BdoizDA%2BYrRPlHxM4CfzttR1I3doWQyGPKdeB3O0Ao1tFAYdEfY3PeyQXBEzneLWrEVsP8d0DYsMxZiWmUxuay6WuGt4c%2Ba2DjbwCH91CNUe1AvVWmMAvQsrhTHo%2B7%2FILG0%2FFxUuc9hRI5ecIwsZPewwY6pgF2aEWFF9y7viOTERyJtnUHMzy8iZHGN7Hm4%2BiuxokIiiLNthdWZ%2Fwe6yHKsoiWrLsru35dGJr23qsd0bOj3bu7jAuPPO2o6uKIV0L7aTd5NhYuaH121B%2Bbh12St5dlShFRg9SNIUVNtH0FfUlh5iUArjF0oUIFPrBkhlcbqbVSRFYaT5IpH%2FrTGFCTOfzY59vogoRpKkGrkbjQ0MgAXLY74OVlGlD1&X-Amz-Signature=79f5b181b348981c160066a052c50229329f784dcccc1ac10bd05d23928ddf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
