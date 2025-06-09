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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4AW7O7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo5N9Q8y7sVIoKJD2JCO%2BBK5uqwq4ujH%2F%2FCARnIX7TVAiA6UgD0yzh%2Bzs5Sccfba%2FmuhN84dGa7w6bJ1hz7H9WQoyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMldYJ2upwzTJ61GHCKtwDg5KzsymRB7gLCDayNOxgvNM3YeWWxsRUhIsq1bmfqT9pt4dbYLs0GYsDV5i%2BF2TveBLQtSo9kg8ReVqZq0krNuMyISwhAk%2F98HE1UFnDqyYLhBLt8%2Be32Gwx9XW7NAVGZPGf%2BEXse0uofyBXuSEeGlnRidce1uwb7rcb%2BLoRsc1awzy1gQzahU1AaLCYRxdil4pNpF8aFvXfLIls1Ts271SFLJpuKSVVwYWAERLfn33HgIQvj78SuxIl2g7n9SoYZ1JHalPrbmRToQ1jJI28J%2FcybKfJwsvYr6SXpk77dhu1CXtwoWYYlAk0agv2n%2F8g0rXx2N5YOZAif%2Fvtbi%2FBmUTEdfVMYBZQT7JEmRgikJT%2BQGKBdy1C4F5rdJzjvabUPKobYjH4%2FKgIiC0iAa6f2bXN4Zx2xdxnbFwG1gawCsD5dX7XzFKcik0kDj4YjsULpRXN1ARbIKV3a8w1sYogWEo%2BIcPKS%2BZHs0g7%2F5fRX1J5%2FYJH5%2Bp%2F%2Ftc0As79HpaEojWD4fS4isFyPIjIhpfQyv%2FoNplPWq9HEcJzMVdSbw00URbiVEz%2Bpebzp2NcYyKl6YDcYfnMT6HDzSe1NaK2VEyeCXd5SUx6O5Y13lu4ltrNBUx546we2TnSpVMwlJWdwgY6pgGuKH6UY1W1Xy8%2BLgOESsS4Eo90I5VAcfU7EYsjV8CZarBH%2BW%2BMEh%2FZYBIOcex7IyFFts3g7%2BeJUTWqC9nAtz2ggwyFqKz1J6Ak4%2B%2FgGMaXNbDH8pCcXmMfS%2BkSjGfQisda0flSgmiGe2QVKYEENuDinos76znQFLP%2FW1Gj8EkrfJnqlVTg2c0EBUfqUPflgKmGNKpgtsHUmKrC7BKgw55%2BH7SPrTem&X-Amz-Signature=d9f030d3100a0dadd4af0cb5149222c298a9781da4d5351351302e6e9681d592&X-Amz-SignedHeaders=host&x-id=GetObject)

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
