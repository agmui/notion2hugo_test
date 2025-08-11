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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637BQRWIL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhcf5QCYQChX6ysDnHFoilBCM0YFKHZ8ht1Q4wAD4l9AiEA0dysHOg%2F9NGW3fGFXFDpaAhab5%2BNTsfaCrxoDOz%2BoSgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOAw7ulKAawoH18lSrcA5zVjvCbiYetyOZKu8pUtZDY85kNgcDPWk%2B2notWEsRe5dzYdMd64P9%2BYLXr37AwGwArBX7d%2FNLu3BzBNjHJ9PARKXv0orwLiVOJbjOFjJnd67wdP1DgXhjwG0QFf969lqi2AoVVRoJvkP6L%2FVT4Rxiqi5dGn9Eo%2BzsfoFtPAyJasSNAp3oQPQe7xXvmzAxdWMiNxHodXwEnIEaDFWleTWAcjk%2F0kmdSv2XiHuPoiGqePaqaszVv68aAs07yHytVeggcMlabA4C4UQFXVuYkLhSWvBYfthasX7hBt0Z0jFp0eidSglOV%2BFIf3bW9A1X79Cd3Cbadatj4U9tJu4Hl5VYGVy3W9%2FlgAF2m6vswgICd7djEj4NnYNysrvkB%2FDW7qOoMBIXxfvlBA1KMgUUTcxDIwpMxkOkyAXgrA8id%2FCe%2B%2Fx29mknxlaOJUH5OfJfClOnAHx7nYritlzmJZHnijnCHSbTiJvfiKYy3ky4Xhtdq6hTRl4o7W4g4MWriL%2BiRTZ3%2BAWJDUVMg8E2QztL6W9QGI9CiYz8wmrVJP0rPvXlP4ay6yrBvHdBpzURQFF5crM7aFRJXISVEyXg84svb331V2VJkfPjahrYmId4hsjZAceLBOgjwvzwDWcFoMPP35cQGOqUBTJD8nDdaOyqC%2Fc%2BC2Z0L1gv3teH%2FS4iXTJLUpIlx47iOfZTaF5XPTlL5EYJs36LSNIogdvoYFgFGmfDYafW9nBI6ZGY9wvD%2BF9LTeZZC1cC0HHp1dA8FWKEQwX6A%2BznmyvNsxMqJaP4PA5CInzhJbhBYUhkgMBmfitG5mYyYdV7luL%2BoQsTf4Lb9bK9KHMKUUWrvUXQ7zNHiVER7GUBnjsKW5DZq&X-Amz-Signature=6e0c2baa6ad3415a924ea4e39a5e731b75a58f2dce04bc4326714c61da117d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
