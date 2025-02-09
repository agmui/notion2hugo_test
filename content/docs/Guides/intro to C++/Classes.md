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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNLBMQZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZsL2IRSu3o5uuzuKs22VJyXaStzLv2KqzmsMfFN2PIAIhAKeq2Tgjhq6zoifaIP3qcDg%2FSteVcCmL1eml1D3zDbXwKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBVVxNkfLsrLe7bWsq3ANJ0oereRhSnSzswUlhDbm0BvdqjxarJ8vhRru3h1ouA8%2FoTF%2F%2FEwIwCXzN5G7u%2FnjqPEi0IgNL9GlG7uw49FceptJrw3FfyMy%2FjSSwPou0et2MOJX0g%2FTofhoKnp1b50FmCwtZiJcTvGzZOJ9y6UaeGt5XcfzwLaEGytiR5teyX4wHpKTKVISQBLJ3Ond%2BGlTai4DPLG3HiPy2oK7xoHARZZlwArO63yny0lauUnDA0Iy4a2bsizaGhH%2FP569D9gbiTQiQEciM4xODUAJ5L9WFxKYXwrtErCpSVy4TkIdg4N7yex8titZ1DqWWhxhF8vRYWhdhixkqPEB09J4Y30fFLlqCyJSNL%2FmfsOZO5xgEtZzkK5p02riSZ3Vzf1jgXaya6f3TPJvgPo6E%2FJdYVizNwX7ee0EvNCgkhoVlaAKB8TwaXzLbfQbNb%2FDDMNguqG2QTzsK%2Bo2sS7Sa%2Btd8%2Bwd3GnsbwHlNsJ2MJx2UxOssAGO8zhcOx%2F30YoyToAZzxAHWP8mseWxnXI04cHh3RxNgGqwhCAAPyqy45fnxATd5VX2SGnhjZn8SBm3mIvhEdHwLxvnf%2FgIipQswdmTD%2BQJ%2BcUiSsb6ZRC1RxVcjlwcALVMj8%2BZyardhXrvlmDCC5KG9BjqkAWqmy4i%2FTmVZiERQdM0Z67fai53tIf4ngKurDMizv7l07b3JuzFF6rczECYLwjHtDMGBu%2FWobJf2RmlMsZwff1yKSdwJH%2Bls106k4qjwVfbT7q0UsUUarndcpwX3XFpm2vYCxD4yXKapQdW%2Bt1eJWxEkgMJ3fLNmah3VtY50XDZLK%2BKQtgRfcGASHeKkE5xIrSwkBp%2FRoOsVeqFitECYMPXx4L%2B%2F&X-Amz-Signature=24f192799d6f69725b9f6f19a227436833388744d960b98cf8e4fad773c90dea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
