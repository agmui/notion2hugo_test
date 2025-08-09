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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECQ4SSX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3KhmJMPTUxpL5CJin3PHc1WpHS3zuLVnU5DORon19vAiEAvFRXou7P7iJv4L0G%2BH1j6x4BpLKZyW2svFfuX0HZnD8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnE2ryWFCOKML81KCrcA64e9%2B2sifSl3w%2BgrZzvQeed%2F2CyfHUekp9Iqq6ilozOThuT4WKqIw9MeCJkW%2Frh%2BTs4S1vuIWNAw1HJGvZrJ2ivZ04X44Bqo4Hx88R7cxohBI8tcspjen4%2FxApY2ESuVBriMccdmVVRdZH14DoDoP%2By9r6e5k7YtKyB3noau3M9XvGl%2BKfL9Rp5ujM1%2BFybFEcP9bsD29wEW3g0s9bhTBu7PN%2F1Hyli02eLWAJli4rmcmic0T%2Fi74yXn%2B%2BHKmQrHYCpW8QLf2Bpq0hYlgFGWyjiXXbWW1vfxf9VDvVw4HWxurOlxmfqpyu%2BILliSQtg2%2FBS57R%2BlQt%2F6%2BFjGCVmZBMiYNM9z47AwGJK7uod2nU16MyQY0s4mMHax9DH%2BJhB0klUBEXv7BrcL5L7mJXgQIgY47pwmvBNwb2lj1kO3CA8b2uL5pDIl9KDppTBH3XOacWpXh%2FT0SjWQTJG4J3BNCnX9%2Bv0WsbUf1sDQzVbzfztH6%2FyvgGaJEIxfhdZ4hkPaLgVHPkH8YbFdvI5D9F8zT%2FNZePbKaTR5ngs7zvcfuxaVDBe29%2F1w9BjqV%2BYBb5xiNRwcXdNuDWyeLrXVgGxdupm6x7PRuk68iiKYLZxZwoO2uW81t%2FvrIXySYE4MMzo3MQGOqUBCE6%2FHjyAKWn1DuxJZ3Se1I8cKxr84m2fTL9tpZpCTQJD61s3z0FdQOS6nqecICturEp4E1Lsac4DrGtz%2F0YW4IjkRXYoyoM8ccqMJzwyweZMvFkpiTeiw%2BO7%2Bx%2BiRuZiaim1fGSzz6Z5ybbpT8erbbNYBuHpQiXS3AYNSKdhVEXn7nb7N1BJoKWxtVkqgvxunfxtccIlPPihtodvIqE6Fm6uOYyf&X-Amz-Signature=2d1191ff40cb0439db7f8cccc62bb3c300ef2c9c65d6f01ff9a4e7ff3ff2d7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
