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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5QSYBJ%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDbRXWkwqN0MfNMCLU73h1c%2FXMSe5f7pDtJ8ls66gAuFQIgBuj3PKubVYKQRcv7oN5ZBmdjqE1d3uZsPI5YIS2Iqq0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrFZpQpL0qpvuWPOircA0mPcU9JwQHXZ1bH7c3PtkNi7BsnavClZJ07Xowvg51bbG16cgwSC0%2BtGcoQjbyvcrCYxLdnk3FDt7j9mBywrIixIdSm0FKDPIMNUW4OLKU5FXDYrlR6BmTSQmR2y%2BkXBKghJeKLz1Vyu9CKHE7fTOcKbTU1%2FdEWVigpNJq1tUbYnMVfRtMJ2nC6tKvUiNnrYQgyUtsWIu0N4JdmDKULrpqBSBLLnlEUsAovMIXOztsf1etSpfCHWOZff7PyLetCCP3A7ZzRyzN19bNAdBDwL6oqEzdYf3dQbh%2FJqn63GBjgMHVWXEvymDGk9BcjR0QfwElk%2FSX6HAWfIP4sljZWXJVnYqypfEeTsoceP8p0jbEgEzfsJcaxVSZznXX2uKFbCxBXQWwiUVkylb4f04gxLVLqNEO02LEOsk420DdyC18%2BYLqNISV67S5BeYdKUNH7l4pp6g8VcyhNRSkRtf5C%2FKl2gycuH3GapCjNhGXvIGc5ShLxaSVf3kV9MxltVoqKVmFZuksnDnLfSzOZ%2BhE5nAi0FlKwSg%2BLeCQY8d5e6ltpfb4%2BpfLIUKhYepy0IR7OECPx45ZSaex8en2nTt3xEP0G6nlpymvlZgM1JUmELAh1dbmWgd8pxqKkkutNMK%2FnlscGOqUB2YQ9jhpcII8nYvgqRuVVqJiTQdfQfIJlKMznT9DZRobnFoSYANoHnvdMFPWp%2FpXPACHeTsWqxu5EXCUZRq%2BB6wCJw%2ByB26iZpTMEPSBvxXZzdh%2B4CB%2B7QTdg0ZbILNpaTiGSvw7ozsYlDbO0NM5T6E%2BRrfPJ9fynbjPok7EgiB1W%2BskGeYrfRYzR7WJKMP9iUSVueWLps2%2Fp68v6kUvlmNcHSh4s&X-Amz-Signature=808bc2f8f84696aceee5c5868e8af0956004b978db6c341217b5885a0c7a4903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
