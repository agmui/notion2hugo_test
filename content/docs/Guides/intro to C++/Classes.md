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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644P2DXKX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2d9PWaFhzMiNVA5Z1KcpoLywQwhnDVjlaFp51wwtu7AiAIF0qqIS92APP%2BvYS0O5fP3IfLfN9Y6ZTnPykK6oa%2BhiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF076BIHJgdt9P7ZmKtwDjXWqIfkMVrl1UD3fhNktiUQ%2FmM83rxdvGKu0NmJVekgRJpW8qSoiASEtupElCP1cwvfrDgS6m1QtcbSrWUrFit8Qnz75QXqsiGgUwfr4C%2BhLbFVU14LOLWIQQERldyVFlCQ4HiJv%2BtcokzhFDg45U%2FzrvdkJ%2FuO9J1J%2B0u2jXupKkxKgZ2eLZHYBMaJQ3u1jKZlj0yFpHNhAmAkFnrwVgVAN%2B%2F%2BvpKGSQBDxDuiW5cgeCsJkHhutb1jq7HPxvVTCssxNnPZB%2BFcNZIamZdABwH0qvFN7TTJQjd9vvXnUea5SDN0nNLmIQn%2FVBZJ7ERkyfUKrdAZu3vHmEgy8ik5SlHRY4Yi7eDGaLKwdpviFS%2Br3V89lbUWq%2FmjEAQ%2BpEKIe73Tk%2BG7FUOqBZxb6ndTDMO7Q8GkNT%2FJ14a%2Byi0nga%2B4aEHLLaVwECTiDf1Oc%2B8SVVhWKquVs0G1Az8c%2BXMgvlu1WSvvoCM5%2FIpiyBU0M5ROHpC%2BpqGNmXMpWYUKaPnfiG3xGVue1bbYKbSkIUQL2Vn11tWjBqCW3hULWcKh4kLfqq4ShTFBMixvYO7OXSPfvJyfyum46A04YJFR10I0zlHOXVpZykyTUXIgP3vf5pI8YLG4imfeGBs7qmhUwvOuKwwY6pgG9y1lRsbI5ykOPqeBpi6zBs06k6yQ0Yge%2BKtwCg31cD5yfkvKLCE8MFdJoIuEbnEp3y4hgJpOFiFOOtj5YIVsYHQ22eMduVeekhrJRXJ1ca9Ioj4F0Lw%2F40eGZOaWnoUMrSBAJ%2FJQURWah3TeG%2FMS26EswpHS2HK86tYwv96dN3a%2BtHi3dR%2Fn8qtVYE3P%2BSVdGwVZ6crPnoWSTeA4nr%2BfvJZH%2FKNAk&X-Amz-Signature=470b0e9c81f07173c01f838eea5c7347480f2156e871a0531853eee6cbc63f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
