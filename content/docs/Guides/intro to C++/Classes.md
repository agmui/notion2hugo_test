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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIZZMP5E%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtYJveP4mJUfv3QhMdcqUoUzLra1oZH%2FLBo2c5HZ%2BTRAiBJDpneccFCPLAFa2Zv%2F%2F6ytjIYYVk6dutdshzmG6%2B1xSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqyILhTdfJ0cLmeSaKtwDU26oZ2VlJZlczuHBJarZ32bNePjnrVkO9%2F7gj8gsLXD3ehFr7ydmBJpHarRPdw%2FCLUTiwOdUeelbjQqroEoAn%2BWxxqSVafqLjB%2B%2BPV7nQWcB2tCa7RnmCYXEkPK%2FQyzsGeJdg3gP3nLzSMBm1mtXcTjleSjsAFknQ8H83DsJJI0lEIUtnIbLQr5en9%2FBYUKBlROFIKwPTvGyoBp%2F%2FdB1LDnVDi%2Bb0E9M7V8sdmHuiphO0wVwcmLnek%2BBHRjmlggxTGoeTb9%2BoHmm3R2Tfk374vUbGhfetdD%2FJLWuU%2Fx2CHLZKqbTjh8xQuWcqwoEFvkYOUh275TcyN%2BShVNR5ounyal3wJUhnRcBiytMNpvWsJuIJCgGRc6kCubgIIKLFDL79%2Bl8W78IwB%2BJQf0Q0bijIuV2lYpVs9t9oSndQTNGPesMSWo8cykpT8q%2B8XgtNZ%2BACmoGYO7mwF9TWbL9pPEY2TGkOwCyV%2FG5YoPhxZxQYsbSePgXYdm0wV4ZKIkag6lJQDHXa8laC8lBLaMGfc%2BV%2BzUt87PJrhSHy%2FCCNT7h0NQ%2BcZIZcn8zp5SA34wX6dwQ1Swz%2BqkKTi2ollMyNc%2F7NugHgRJ9pUc0dkvobrqNQ0wRPpsYSrWDr2756d0wqcvTvgY6pgENwh3kBk1bXMawGY%2BQ6a9GcWlr3Rv3T2UiflOHq7anv9ySxBkOPETIo7mRwcPR%2Fw9BoREzhUNiCt27u5jc2DuKfA1Wp3qDCaHtHtjezJU5hFfEzS9TK%2FZV%2BCuUL3OH%2FMJAeu4Xx%2FcjgVQ7OjpTl3fW9xBUo3KU5Q9yDErV%2Bq%2F2LcSIss3Bt7l0yrrSjDv%2B8WnLUt4MCYNZtt1SkQHWARbyrjYuX15K&X-Amz-Signature=95661b917a560b6672eed501ba919d4228093b92b7e31a2ef50e4223a791bd66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
