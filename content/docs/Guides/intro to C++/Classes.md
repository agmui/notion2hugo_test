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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3WTBVQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCxcQlQOaf%2B37U%2FKAN9ViueNU8FB3seyQK5fmrifozUBgIgKE4qLkyzyRnalzNmV8v42rOeB%2FJDJx0%2F%2BEkJm7SxJeIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCZWwO5S14Et5DyZQCrcA7yPNIfvBafPsu68oVfLwtvB4wWsUILxgYven7sdr8QX3M8RS7rk8j%2BALphGDBITuy2Jd%2FczKeHxKGRmmeokIau09KvO86QCZakcto2BxEysdGmj0hzJOK6ePIAz9Y%2Bigfr%2F6WjUXnW8YT3WDNAbquQ%2FmcMAsQLDWouA0iQmNylVJJsBYqpekbOSB%2FoZ%2FsG%2F8cpKTYvx6OAL8%2B26gp%2B7%2Bzzhzct2%2BxlZ5rnJxh1gBiY1x2w7X5dxdFj0Ou9Aa0UqZpyoPjcqsrg0NDTPvPGjCaZusbk%2BBSD73IZDevJJ5SJXJ%2FQh24D4qIgu79psAnNVPLRwvyfTip6n7J9OmBVhMWBwwyVR5ntX0yXidi1LEETSlLpqC%2BwKZ4LnsOLjECICNXnhbTDccAniqOFBqCvblUy7vlZ4p1gZ5ZILFQEOMgLDcbaPyjgANgp8Q0AUx7vlZwaBZMlA7h8yPbuMcy1XaVCv55RX1pkE7EJvy%2B6ddSLp7PSHnkg8B12Jn6OwJhlq0SQIGBI6jf5EsqOZ7m67G7Q4p1jU3tyydYml4Ddhi0Xm1TAFBnztO0RY294nFGBj1hL18JQm13qg1ZM8%2BWP953zkSS6sI26SLS5V9kyCPzNufLdjpttyEi6YJMqkMJ6Ewb0GOqUBAw2tlCsxs2GH%2FbbudmrWXBJnr7ULnpaVReoxMTGFB%2FU21qGYm4C4eTW8UtlWdaKcsX2N%2FL8cLMsNwdwrZEFx9hfr3Rt8MCxz3lf6oolKJ1S5WsafaSGv%2BR%2BuVbm3rlor5OdYw2mUskvAs%2F0%2FgYl8xZSgfoJNNiJkuw0Q7vCOn8UhRCv2190qddtjLjFmHPBPRXkGmx5fb7iKpoBvD%2FTaFOG7VZmd&X-Amz-Signature=b196b63b9f45b8ec748148e94fc82255acb302ee8af8dc0e415d75aafc0ed10c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
