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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUP66TIS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD5xhLi3Ekqw6kp45yzDPb8Y5nvQq%2FsVRl%2BZlOGLOjT9QIhAPdruhUnO51%2BS%2FpXk%2BxIL%2F6kiuRTBiyn5clKdpUv1LHCKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMgomzysgbyICYAG0q3ANHr%2FJSlc96RYoUr6voNv%2BzPSiQivIiqgJuvW0hISGXVuDGvC%2FpvhsNTTVV7WtbnO8ujPEoSbq1SwURu2UMKfjmC7acKjcuvxxT2WxHUmSo1WsiQXqDjkysBgK%2FZoiFVUHfC%2BT769tfyBvo0nNaQsvSMeyJRZrfgJwVRFpzxBR%2BDPAqpMSDaV4GxoJpyfO944XDYP1PSiDpP87PPJLJynJyfDrUZ7wmRcgCcyY%2FqiEFEXs7bnOMAK5j6MZ7eG7UQIGiGdOceYI0aonpyupiiLP%2FFNnlwpzwsGAJuRbjbZZ%2FjwaNne4OejKguSzFDutnEIJHusi%2FCOqwQQpA1NyVFvMo47zixXV0otepU25w2P3AthzhF1kYGTURMUaHZQZnmJAwiUzVKG1uBWORZDYKRg9ClmmrcyLH%2FrBW9UlN%2BYgVl1Nu6DisdiW%2BuS9SY2XMfGEEXvaOYZDFe9FSKeuGWz3N1VpJmlSx2RGxv17QVuTib%2Fz5IEqLVzgN8Qvt0sR6G0VvVLdfZrsoQYJV9KikjJ6imPOTqI%2BlPEW74OTgHChEp7B%2BUgakCokTxFilzjoBr%2FPKqFra7iKEOERpJ8bevfoiGbCKe9DAdmHKYhoApT3DSlNhUxNsB%2BVC65UhHjD%2Ftq%2B%2FBjqkAfffPkZY1xdor4uDLYbSN03Cu1pVF%2FGpVPqDYsokeVViWsWG2qj0dGnCqjTvK6kwLCSC%2BRyeiNa4KPHow8dzl%2Bm68bqnSWqXjVDxigr%2BqIzFI2GQhNRQnyxLvsrOQg3rYOf2iqYeAv2DRMjaT7MHCG4hh6H%2FsJNnbjkf9ZoRtGcOgDap5eHyWLRXP0KQNvq6c52Dcvl1ffwHYKVl8gqEVFwhTyfc&X-Amz-Signature=c75d8906b50c5d50aefdbbe19eda959199220b71408eba9f8dda731c97647f82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
