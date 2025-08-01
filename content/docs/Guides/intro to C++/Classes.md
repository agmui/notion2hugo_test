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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBGF5ZG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyng00pL0UQCwDiPGl80iHOHGiYPHUfnxsUHtnWB0CCwIhAKHD9Q2ds2JuW1rwLSnJviZfXnnQb3Lv%2FveCtp6dDS8TKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxPR4aO3Fa%2FTTUSRcq3AN1EY%2FpN4SQDlZv07Vwx%2FRyOln1b8qtRrCT5Z0Lk2ckm22ykzycAWY6GuqTQhcga%2Ftz%2BbNxdxCQJ8feNeW5zeA7Qa3I%2BCtDJAky2heOLrvQSjKSSSaSB%2F%2BW%2FNNKxRN4qOGXm5zKZpUHZIeFIuwdgpFz4pRVvB%2F0X9BEV8SbjQB3LepYZzCCokqqusTleUlTUU0AodFPN7nULQkVilP3kSoEo%2FgkQYjD5qzlDmi39UDtF9VtlooniM7GhGzr%2FfbOQ2NaogfgOW8gi2guwVfgAR8PVn6u%2BeWGIwAPF3LcUUhbijU6E6LEOJ758Df9mMfwnrQV2vddmhiYiwnmzdE6p1NCPNrhJ2E8nUE8OpxZWPzhz3HQ1P9GQuflmFfw449FNq72TSH5ZByHFKL716Xmk6t4IEz4QYHLlnmeHHzjDX4mvFoiNiP5v4I12Sew5NV5XQlnLMf9qXfv2B6OC27r4ntbK93%2FIPlwqFYomS5erDE%2Bo7%2FQ2QsnvXl0pytPMsT4YyNfGGnVmq%2F4DHnlyu4MVRlG7g%2FIp5hJd7J2rtVMPF4ABWrd2aDhL0%2B6lMVYud%2FynlKuMrJhCdyea4NrU1yvd8Jt7%2FogLjVDaNLa2%2FhiMZgoAFBdPUU9SwgpnHSPUjC0m7HEBjqkAcqmyP4maHlD%2FIjuylohKYLH74XBifdLUWe8jRZDLhEVMBpqu5CnDKT5TSDzV15R1BtbqFqBTwNMGNVCngCvsJvAyzt6tqJUXySzd2bNPm%2Fi3KfML0HwT6Cu%2BKxXhaAvni4dcliOg0dxwioEhRyG5GaFGy5Y3UKIYPQmbL9liL6kGlcW5HWJyZalhroYfM0XLOoQWwqYfkoNWuMuC%2BXHlJU7yHI5&X-Amz-Signature=05d52f4b0be537e57bce32edff40b3402a60d3dc1e428d164594d9bc305be8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
