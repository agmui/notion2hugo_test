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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUYRGWKR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHVmVOlYvla%2B9XgpgLSdFuTJTxoV6aLGYqoNmiGfLv%2BMAiBAw6prTe8vHe5NWJI8xBrs%2BmluaitPbJnWnL0e5AsHDCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMzVOw8AmT9Xyqw%2B11KtwDQfz4q3NWXZHZmeHASMQwum3b6YRE5vDtHhltmWGJnELyABwg9xlYnJmFXWecO52hc54yUnHL0my9MF%2BncuI64yVMJhYmN9ifImtgd9YRa7%2BN9xJ17zeHHkpMjX8V0CWXj4t9sU6JLj9Bwzz57nB376scEjeg%2Bdb4jepZJs4L8LkcCmQfsp0q0qF3ebpJ1808SkUBChjFYc5ApKhzubZLQPoZEECTpsjM3hOV2d53akJ7qE82Re4AGYE4RvqweqsH1You%2FmCVbKNJ6kW0vCZn%2BwdFC8S0BxI6lFbotcWgte2%2FL2OWXt9aQ7CQwB7MUENv%2FZ%2BB1j2ZDlfLJ%2FYOD%2F9%2Fpsw2gbrDTVVm6R7c2joTYZ%2FcfprCXGCV9Zy3Am%2FUxAFOHv9CvKaHqvczg17Vrt6PfSWW83TkkJUIW%2BpTrnvBVxwGsa6S5r0th3HnoxddFgTkuURn93Wd%2FXbfJnAqHXD1fJveGI6HEnlrDViHhtTgY7nwZUXQXleTl9Ccwk9WOR%2Fr0Y%2FdC9HuVafcXgzMInLu5Mi4%2BqsMaLh1aUm4gZLb0TXga7kFCehfFk%2F9FbvbNFQUNoDw51YcjA36Wfl6zIgjHintTn4rdpYfyiTPvFsn21LXaSdP3RwPhQqJ16QwyaP6xAY6pgGpVzPg5VtosmB0Q0XkISh08J3HuXsAADEh042WQLs8yu64F6rD1F83GHrRal8i333%2B6oLq3MZCamVC0vnQ2zbVKcFWiwgzTN1W8mHe%2F1jARIHIcFpX5D8tKA%2BMObxyMXSLYS4soTPXY96ftE67Yu5IhGQk0GvKvyk8OHBDBjSuVpmK%2BFEmVuviV6vT1EoAJtvdX2GwCSCyXWJxPhmdX9VjG%2FPL4%2Fne&X-Amz-Signature=9932a2491db28d4d3e7c4208cfdb1495228cedf5571b33dc974d66e372a51e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
