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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OJ7LT3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFQQtLeNUgovMID773Y1%2Fdu1jNgC8n%2F5hyvCfi7tJ2CKAiB0kYpzvEXHFrhXlzk%2FshAhO9FTdOW7AWpkhwpF7olmqCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEP9k7%2Bx5yCg7Hc%2FYKtwDiqanGki31lKW0hSamxRB3UTer9gVdT4b51VMIJRIYfXvZ1mFBzL%2FI%2FBJYv8Rkjj7dFckCRAFU3tmvh4gatAtK%2FVuA%2Bpgi67xgtOMINA%2BeAMfSM1ZtvwJ9uh%2FFKnqpEDxu90WsDxDltYviSvKp3ivITSnYpodnjec9W%2BxbgiNnOPSjlPYa%2BBcq%2Fs30x3TTBka4PREL%2BX5fxAexlMCNNIFlQMp5vqMD11uKomDNKr6ni2lzI6s1M16PBT030FLjS7sOycaKJY0vKTP9ECWREoMMO%2FKa1NM3Vpnf3sdvPUUfW99DqeXOzTsjqzNkj0Qwwked6T5j8PH9FbSbEcpC3ObKu4a2dBiSdl%2FCAUcANfWg%2FQyswvNTthyn%2FMvUdLFMVB75DVxeOe5LbnIN2ED0qYxHAyaDcyuN%2B9zcQEtBd4b8dVDS36XH9s294lrLMrwuhuwMRhPrw2mrHpnWue9dy4Xi9IJ%2FAOUJPhxC%2BqUkuqzRtDSvKZsQvHJsZsmxfuiYwhWDS9zDRinEDC2upizuB%2Faf1kFDHuY0EkAu2AVfX28S2KINw31heEHl3EGgihCNhslotgGrUqBiZn%2BOjgYBkipJ3iskxH8cK%2FvU9S2%2B5%2F9fNEmexgAZgwdbaHzqAIwzYa5wQY6pgGAj1DQDAIz1rHYQACN9yjgrMKZHS7Kdi%2B6oOY%2FYOyrZHPq5QhSSOz4adjU5k0vJg2aR3iMySUJiVlxbauxBUnBq8th5hSZeVGFYOa1qDDhpxctKF%2BmSiRUTQEUSSmH4nQM1nzxlqD6lpR2LyIc02bfFN5%2BGBaTyOmc%2FltaiRgHCN1oGbeffX70DlzV5ej945xsHT0kCrqhqpB3fwPp6hp5bQjx9%2BGe&X-Amz-Signature=4e835ba6feb0e80e77b5ce000770768ed601e3f7e10b5664e2028302ad81f447&X-Amz-SignedHeaders=host&x-id=GetObject)

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
