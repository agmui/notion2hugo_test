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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RYK5Q3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGrvG1o7tvCqRnCpRlVZ9ooHREBELCqv9ngKqHggwJrZAiEA0wQAXz%2FYmoIFgH1oFHpuv6MLe%2FWMn8m16HzZbOWz8u8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxPJVui9e4aWcpeiSrcAxasKWirMNc%2B5VG1m66RzzxBwl1bVqQ3L%2FSGmAICuYmCDnM6SDD324TxrhXhQqgdPvhFxOZhAbFohiFn%2BqrHhiKEo6g0xuEn78dioc%2F9AwdPejfaNerYyNScv1v9JigeNY5P36oBQfTVPHpUwbzJQAulEYbnV87tLMYbfBC32DAqAWzZMJEBegqQK4V4kd3eg%2FSY9hnIhGDBUFdqpPOkG0c%2Bs4dboau75SoYl8AWxyX5YRocoPcBOg4otg9T8mKrL4044BOjLMbU08ZxCLJClGKDwXeqcW%2BQUtfVRi2ZhKKg2%2FoUBe2BlYvWBF2UexAyTWqiH%2Bod%2F8xwre2CCQjLD%2BE0pFJgMXaWTf9%2BUxVWF%2BfLhW0BAzJCd0eofvM2BqBFU5y1E1lzD10KCRZcog0%2FsEeHFSbWF1sncMIrUUJNvELYMfF%2BiStqWorFamTSj99CFXdLJGEZaVwATwVl4Sbl%2BKvgMpNZYPIoK9aLpIyb5li4QjJSp574JdcEgMG1ripF%2BNuKsiIBGFanNNILwhDLYcXtwmUa6YusDY%2FZDXh%2BXsIgpigvnnC0fIXDFeCRcMdmRHmmH%2BsFhOPsSqCsojfvALoZfHMxq2SK%2FB5ZAsw7RWmIcUt%2FADgX%2FPMT72SaMMWCtL8GOqUBXrIFiQiK6NkLVH1dObxRW4sPWNixoovQyrlSzWhEwygzVCoRwWGIFKS4UwuGSlsk34RWjBrlUEbg60bk7WAJ3PtKwOU4E56hsYXvfXo0XfSF1HsqGDRf4hsvuS%2Fcb%2BDCvn0u%2F2dB77FRqogcKNbd3WdIqQUXTfU%2FekHrhX%2Btv4j6nRdb5sQHE0acfzINIkIPCSuC3Vp8D%2Bor7eUgp9370QAbEeuz&X-Amz-Signature=c78d9b34b137ac2c84cdac4ceb72eb8b1f3d051a53f1d70695e2c245b3654c56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
