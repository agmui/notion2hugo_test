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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q72MFHD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8xZPd7550v3VDVI6WBMENl%2BgGzcOFfLUzedQanbeBYAiEA4hSQObtTiXYb3ieFCmrzkKTrifqcbomfazCi3K6%2BBeIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMMzEXpExcG9Zb2ByrcA7ZWuLT7Iz%2FqqT%2Bi6V7eFAK2xv7AZ3QgYvt8HXyZpi%2FFcJPswl6Hep6bMD9qBx9dvvPTokQvPmkjQ1zPXwMBTzI8UpIx3yUAOz%2FkoUS6wrUcsIAcVkQZM%2BiUVqZVkfBBWWH%2FvF3BgtJ5HzOOlQl5zUHvtC1Xa6Fzy8BtpAOq0L4kQMDALtJr5Qk07Cu%2BJkruvC9KJcttDHsZzBm6FBB9o71ixRkObiDjo1CPLACaKEGTWcnRag8z6Qj%2BopYDD4PUdBDAmWwt4ZUesxoYYZSUXCRn9r77EDlxcGKYSHEj%2FzWNGGyJmDiGq49rKivPhwJvH3QFwoG7O%2BcCJJwghcfiWf18Q3sF4q1krsJQA%2FranL83l%2Fu19jnm0vsyX%2BwS%2ByhNp%2FXV9XjQ%2FMW5q%2FkJbaS%2FNa%2F%2FClL1R7u0KWrQ00OnHiZyxKyo%2B66T6r%2BddT0NirQxUTeuua19SI1ZNyTcfEWmuplRY%2F2C3nuXBM7Fl1uSkp9qQBs57mKhkNCVAEpYw0VgVjlgpJRar5yQ2u17xtwXWm13DysPxacsbtZPy10N1WGcTlxkjZJ0pSOILKZ7WKvo8bC1hLcV50OFQfRRPZf5wJDp2a%2FNRkgTKanNvNX58oVIKbn5btsukBTveJvMMNvcqsEGOqUB6seiI3p3v6G7aV%2BG7IdMORhOmVudWChPUwAMMoBO6FytDpxvsDV9OU6GVHHjmK6pi9kOI1opw1Vul%2FsQdur0CQEWCXgRoNJm%2BscTdqzDFpMhlUWPhHQmt%2FLyXLXS99aPNDeYbu83JpW0%2F7ZvKbCASzdJIyHhxwqVH5LyKbmusO%2BwXazwVaxuTwlx0dLOuzC116VBWcV2LCp1g3f%2F99TFYYSv%2BcUf&X-Amz-Signature=abeb87da5d9795bb022473c65d302b89303802c54e2deff41ea6064c989c1dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
