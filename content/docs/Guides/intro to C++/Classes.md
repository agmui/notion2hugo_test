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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPQHQHN%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0VJEHluJi8TzeTaR0RDwl4%2FBPGHXg9RAYfMsz5LhO0AiEAkJoXFoUW%2BEYQfsLvO6L%2F1I5guAjuNCsgfYeLYkSxEtoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuPe%2BmcQ4cm9Gvf%2BSrcA9bjHaCU3j%2FMdiZy8aKAvERWci4ek2R6tFTfHsc2WdSa5tjAf21jEGfxdOubNuxBOZruyNHBQk8XtYyxOpvimpZkaRmngBKJEbcrytYGQ64tjG65y432k1%2BZYtFH9vZbSMOJmOI7uEpXq1cct0W0N2PNmpEJTUcDwmHbmwQ%2BPd9nwNOZQx6tAsKMKj0YkvQfyRH9BYxstMV8tKU7TfFG%2FgVInHXCbv3OY2%2BRuALNpKdWjBkbtncC%2FaaXJKJC6AgC%2FlvLHtLhBnyrytI8Vt89UREQ87I2JcNalTcV%2F6QzDp3AgLYl54hZk4dFclvYn961DlM8FPN8v2ZDooFWLX0hfnyxPRzvSjPb7KuosrJnpERVymnZXHKdTguTEvEOt63ouENfT%2BYj88O%2Fxnbtmwigg%2BKd9sqe4Ywiqzqle%2F3JfwsHElkwmNfuknJ7ur7%2FDEe94pBnban7JKEXq2aYwQlNlFnXQMv%2Fc%2FJc7MtvG8hRE2y4l8PYo3vifO%2FS4nXFeA7db9Z6WmlZDhBl3sMd9KvJGq0ae1tX94oO2Xrn7sTz0mS05qHEq8ODZOMktqL5AVHYFmWhDfZRZ1yjW%2FfJlqrW30h4IqXXFleLapLXKYlxZm3LvMmGbsvjlpc4CubYMI7Oi8MGOqUB9rNxsOi7O1uqqf3fr41gzpzn9Ij9DtTG9rv0zbDk7hQf%2BsrwVOVY%2BOIia0whUxYgrQXw%2B4m0XHzO6yHpqQ5rV09x3VmXVZjV62yXckI5vHAMT7PCDlCJ%2FVU%2BxvzjznzgpdhQR%2BSzbDvIVN9qOra0GHWD7vTRB4PK0RYyRoN7DWLGjP1rQw7VQwTUkuCJiURVoUgdivi75%2BUVDDc8ovwTanCQYq3G&X-Amz-Signature=26a1dbc842f7d2aa0090c12a08d961fde02cfb2053c57fae41acf7fed4ac586a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
