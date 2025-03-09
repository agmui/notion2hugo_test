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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYE6P5V%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAizv6lNxRul8b8k7%2FtA4H1oEpezGo6%2BFy4l74nhSyi2AiEAz6mIiF%2FaBBfrgIxsNmQThX04fLqAUioQoNLAFYQ1KMQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDE4zIJ0yYbKIJRvaCircA5Pt1%2Bx6WfjmMhKKciG4AgG27LXbAoa6uB3SNGBadISTxjiToZJ9mwbGnzHQwH5sLM42h4AGzmWVuBiIBrrNZdDmAinIZ9B%2B9a%2BQBNgHMvXEjPYhZ%2F84ZnvTF2JfhH02HngcHisjLZCmkCG85Ji6HyE0OHtCd7XhrZKIBa0lMOkUnLgtrYacrfVPous3r7tclxvjeB%2FJQ%2Bs76%2B1ClB85Ioez%2B49fqSXt6r%2FTpJphBob0u9xoNchbiWiIwc4gJWc3AdEnToLRLpx0Q6lASweUXWTgjfYxvZZTkF218DWoqtCyHhyvQQuveH48ltBtVw2MxJUkL5u9UizlEVf592hB%2FYA9cl0kagWCQoWpt56eDjArxj1KVeqr%2BXeMbFHPFjwEfyWfWnxqxXruoMrXaVuIoDEdlouJ0m%2BHuX2%2BW93WkTI1BR1BX8LAuJzaYU6SMWhRXea9xOPp05FoedpAccN1EKScVG%2FOnOp3Vg93Ok2Qr%2BGHa71KvkYZdgOvv6Ot%2FL3Q8i24d8rWDqGYmRXI1IZqsQzC7IdsFRbt5FlUdJlOHZ1Pz3L8XBDSn5XOKcQXs6FI%2FEkhCwG%2FzgNwuoq62c4mv1hU5j74hng8QBumZqCfk%2BLl4xZ%2Fwv13jE4EDHQrMIvrtL4GOqUBAzT9du%2ByjWUYNSfC5ieMHPSRfGWT%2BjICbqeWLoMHIekI36nDZYr2xVefgfJRu3ZQLr7sLQzgcqV%2Bz7rl7OrGJwmZc39fKDA8jBA9Sea7whEc%2FfTiaS9gINHL6fSOREBr1goLDDWg2H6S4jiVGqUXwbjL7SSeNNVWkb%2Bt0nklX8gim6zmzHJyLyNmvXizKKwNzU6%2Fm1bv2Isd1kZS5mDnTBzjEf1e&X-Amz-Signature=41f02d988008b30d3c60328bc7e8223959df747f7a6b9b90730659a107d94673&X-Amz-SignedHeaders=host&x-id=GetObject)

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
