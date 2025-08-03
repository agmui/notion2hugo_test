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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HUX5II3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKiAq1t4WLoqbd9kDC29j7CjKeZEAQEGAgTNb1LLEmTAiEAr%2F9ahQntWnsD%2FY0wAh3FBhI0vzBCnkfjidPU5uziGyIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAibAuPo3lhYajNRMyrcA3W8WgMQ6CvHI3GZx7GM7NpvRJOdshpv1AUYviuBkPYCztOFykI9EsOXHMvT%2BFoh97fxeSDDG%2Fw85P0HedaUwWiXnbGzqtTXbcd0UMPbZeED5IIhNvvzoeeQOnoZ4NPtTlOamAmcrPqcke%2BXCt1fykqjs6DlIbBJqDiAKa0GqmTRSmjr%2FM9sXTX5HNiPzdK%2FR8zJwYbF%2Fv7U6K08P0RRtaT%2BHrZ3BUc6kw9ZuqAs8FLguTSgkrlzEme74FkXqM1OUgYSdyd36ckSYlZRomTkL6Moo07Ijuhfd1mAgdZZ6CUxr5lMCFYKQcM%2BDIhQzIWWO8ZfjNcWq2FwSi3%2FFw7c1YilRkkZdVlR0VUsqZ7WYKVWEiaRkO%2B9JUYTB21dK4yIBnJsKesa9Zs%2BA8eqXZjgktQ%2FjHELlIjOqEMi7ZSCY2wn9l5GtKE5%2FYg0Zf22DIKoNfzlo6H5wcWtwcrEqjrWa15%2B%2Frc59joji29chNq972iWZn5bUGbwnpL%2BxlbrIFh%2B5vwcOXTMTD%2FVeFIo3NMcdPNnoaXKV2DflOboclYVgQaWhMOLXHzvaBYdB%2B2F97vl%2FqkdSgpWBZ%2FfEvKiEPPlQThn7NH2PjhiAQzSSS19Fvb5q3YZDZdjRMFNvvuVMKy8vMQGOqUB%2BpvhI36lVs7hIg2dVlSttpzS0CwY6jVzwVVC%2BsXozAKXGUii5s21WgFqjVkjhw5gK4FnsiB2nkFzm%2F4H4dLa3acYZJ5MuTskmY%2Fa2%2B%2FpM%2BlRbVsSfxXVDk3SEae7o4bHoGVPnr%2F15By%2BjyI7LTYI5O6zcDQJCdI2HmGGDWxrEMo7rwm1ZOagS%2BhHa02Bro3FuK6QSLT9UyQyETXrmRh9XNJGBM2m&X-Amz-Signature=7b6ddea439610ae034fedb1f4998cf69f1e54def21e5fdc6e63ffd0fa8534a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
