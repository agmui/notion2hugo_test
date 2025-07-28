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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJDJJLY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGRXCTGIp1JUbEhtgK7XmSmAdviJMRZTMy2cA45XZNnfAiEAr1b1AYup%2Fjmn90MOSY8PW8B05D9BmubNjM5uyGAvHfUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7qxPWcOp%2B9mbg5HCrcA01ZtLtQoDPi0FJFmLuU5D6nSxTy56tR%2FssDCbYqzvKhamOxuuIHi6Bv4W5fHoBCuMNYoojgVCA3c0s%2BKb2nRQ1PpuEW4gzVBe2n%2FYeXdpPUEG4xwzpjimfCoyRXWMvrM36jCkWLxAAIowMrFWfxhayT7SqpEQkaK2REhGcZ9J42q2RgKYCQVj0JKO0aDg708UO%2BwDYVXnw1kHgDZUtocSg8ZBXcl9DVyeuH2Y1U4mINBCYbH%2FtnuFJEVVe1FzXo8jXF6NhWaf6pcwUo8o6PsN81uJ62T0lcFhFEJyakOOyWL5U1HP0yCVKpazcJ5uw0UeYHv3jq8sfcDwatnuB239piMzSZPdy6cllbbXvekcipgPI%2FdNW8segz95mnXywwwjN%2F62Vn%2FCU1946tmbdW3LxjTW6JyuZsxLGpKg3D1CftDlHXcc84QiDmBYUiigJ51Cx%2BgiAuCSsEpNB7k4gRUPpOTyU7FyV8w8SMbc7g0BLxQral3TmaV28V%2ByGHgXmCgxeeE93Ws7DAN7xngNiQUvR4Y0AuwPWDelUPun5SI%2Bqg3xiM%2FF18vVQMO2Icm1THXfsv%2B8l9jGLenRaElmok8DpgbRvOLBuc8%2BZmEWNnjTy7R%2BFduEj9HclVdc1AMPDRnsQGOqUBeKPWCmfKcLTW8jzv72t5PlKa%2FuCTcIF%2BGh5mVizmGuxNo9bVVNBKwoW7iwKCGQ7TdzlT%2Fy36CUTEGkqnDj9UVelBz%2FA0Ptf3AURAKtl0PazTuVccmh6uF0APvmzGDKnd7Mtnzg9VB%2BMqCZx3pR09pzWQSh5%2F%2BuPcp%2FJ%2BiyTT8FTuyeWtAzb3F8VbGUwEeLKCAhnEmZ%2B1GFB4RtmVHpDzRPD8wUKD&X-Amz-Signature=4fed123692904ccf3c5574538000d0b4b94f6866c03b2da939e69d33a3b9fa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
