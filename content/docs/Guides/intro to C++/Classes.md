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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFXKM6WL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5pb6S40InTlBy4MJyP3jYGzlNR%2Bea0Z%2BQo4Mif9zWbAiEA%2BW0ENYZkmt%2FsKhgSK09l5HFo%2FOseirOLW47A0dTSudwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ12XwoirGyl8KT%2FwCrcA9q9pwP04DsNU5AcnAKBz0XH1FTuCpIjy4lN8Uv2thKI9ISKKnZfet1OmRHQRgM8hq3nwfjgu95Q4t1FkDrqdPdqMk3yIGqPO%2Fmy%2BF%2BBBVuvF6DiovuONdmXzTvowwuSPDNVEBizeSY5wnTi8FptYwnLgVBYXparFCiJfReDkG7dH7ghp6BYXswhcxXm1aNXNnHFvYL%2B2RkX%2FuWEG5jbiJuxGybzJVbAXWrL7J%2B768TmflyQWxKIZczYq1x%2BBzhu%2FvfgAqoFBCkRJ6a71sYCdF48hlG28sGkULq%2BweAz%2BZEJju7LPICHi9ceN0ce1wyPCvhXgKJ6Y2eJ7v6Gp2eRYCiZwGVdSAS6Q34WajZhP7xSdvVf2NGRBAHbEJyVBAJvIIiHXYheLPkQvu3KlO%2FCDXoYLFvs1an%2Fi4QzoxAXDcmnEGaZe1zcITZSh2XFgclCpWICCurd5Wf0BpdMSFxD5FQNRN9tpzOm3ByCm5gZ%2B3yYwZFUy55A%2B9S4czlCVpENgTFeF2%2BbAY44jgQ4NcFa2j2y9CfYyKl36swfEUGaDzbXzqq61ZMP6Rut6MuX6mCQu1os62zM%2BgsLYUGagZ%2FmSoeJT%2BqqpA4%2B1djOdKwSjqtLtlSvf4XI0PeePDWaMNypvcMGOqUBv2TqEJIILy8F0lyHycEntR3h%2BIZACHQQCjyLSXPQvXIvsQFn8UUj8o7hk6%2Fms19vzp0eSY768lWRnVKtqcadq8%2Fk1cydB3vRnfl6m3weJRJofRVGaa7A5NlS1moZeSdjFE2ijjFF3PE5dHeCVEK4bscD21OhDej2wMBQg098WtNJGWKXEAlq9%2FVVtFjRsrmMd0%2BzJTH37XNdeTnHa75ugL%2B6RPDa&X-Amz-Signature=68bb639ee0271b307e74b6648c879817f07a678589d1b5b1e373899cd96ce6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
