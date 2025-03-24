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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBABTIJR%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5alVP36rzq098H%2BGnKoqHaPjjkoIJtpHBy7CJ5TMjnQIgX2LwAA3%2BkvTUHK2HroX3Cb7BhNPUrUo2NoCg2qlqrz0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNxbiu4%2FrgzD5T9aCrcA%2Fznxn0QdB2HnQKycEDSB%2BYGazEiaxLgPeBfGHlHyQd52b63zJOkReZHcvBmV%2FmsFg8irz44vIG8%2FoOoSfcjQqSlvpHler8qHrv8X3XYWK53Oh5dbdHkYiUIVp2mtOlAsEsQJVhAQkK4YNCmTuVH40%2BA7YbsKIg43FLjVjMRM7PKkMUeHvAnxFBDDRGkimSEXWuvQ9p7NA42fwmYifUjtTwbnhJhhz9X26iw0Zkag9e2nlHA7l3NLtTl%2Bg7RoDXYlUlHH%2FzdCtMNSv3QntE5yQct08xWTUMf6mo88uSoqcfO7K8ICuRAHfsIoFNaj4T09FUwUzxUo2LtYfVGEWOrnNY0STJFaVc31INe0nL%2BGTCheLm2fOprbR4iJ8KBY9Sm7VM1MB0hB2aWbvE6TvzPF5Gn4YvHIt%2BgVK1PwU3RYOvLeGmZImUJN%2BF%2BXX4yNvrsE07enCSx8oMVl1v9OOQcXY4ZVf4NzWSbE34BSqjuqtFtfSn37QUejEm3HnYyyNNag3m7Z05fyTzo%2BsawlQhho3xEz%2BHBi5pFUyIuU%2BnjUnTxklK2ck%2Bn0%2FvLHQJeT8vQc11bBFivmcjKuwX%2BuI9U1C7NX2ecrm6zMyIbacM6bx%2FeOBRmbJM62sduymKqMLCSh78GOqUBQ%2FKb1Q9qLrEhCaJDd9fR7UAm1eku4pNqA4niLW84uil%2FypFP5ueE2PYaiX1SfrBtR9G5eKWjEWzu7Y6WymLbl5gXZUKqlKycy2kP8z8JBV1cjmMIp2u%2BKKSfZE3bi%2Bdnbt52%2BpIEIiJd2XUDwGEg7GoCLC1FZTp23C%2BoQI09XQCnQ5Q1Xliz9EEzouSLVLDuAyNgZlXcTCIgGwGyYi%2BlzDBPGUWF&X-Amz-Signature=4b968f8ea55a059598da07371ff3282384a014b0b537baccd6cbdedb44dcb72e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
