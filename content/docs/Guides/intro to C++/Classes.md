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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOW6X7V7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWrjnHmbct9tDfeP8OzT1jKvI4D5D3qGdsvzmBHV9w2AiEA12d3kMJpjI1uHbpfiN8ZIX7oPWtLqyBvXZcu%2BUNcsYIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOIMhpk3esexQbAJvyrcA22CXgefgwQSosOXmg1kDTtrlCzEdsx7brdO0aFVLR9TgjFZPp3GvXlI38CACFlxdCR5Qc9%2BgrFXzE%2BhXUYH3icxDrnlU6U0a5rrCa1MORFSHuznVl7rhWQ29GLVgC3zsCNXzZzHrHeIxCI%2F58emNkB%2FlLp776Bwz30ukHxGfi66zAwIIJtTs7FAonMAZ0kZsCRpt9n4AZmRhBfBbZdXn0wODH3KVxpJaXJpOfk3YjreHB1k5qBJrhSqoMEmhdvsLTdj%2FmywgZx6aCaZCAot8p1uYHFMxF%2Ffb83swT%2BletysAErBLdMAWpvfcwZy%2BHL8aojdGuslGaG4JmfLs%2BFyxwBIh4bSHjFKKuOLUxpz9QmDikQyb7BlTV%2FHgcVmzld0btmR6TaT1oXT7e0bRARj28owdU%2B1EwPvBAOEOz%2BmnoHXkX7m4egzYTqzSSr3xlDozChN3IiZ2ZPl%2BZYOP7v3Ycu9USYDtm6vNdJkDRr6C2kHRPXQ2bNA0NxxFEILL4bmDSTC4UGTYrhjiL9RGFcSQ1kE4bO6LUsoGSyuOF54EYJoYF3F4pjanRdtW0GEvIEsQLcLGOQTQEjrPJhOvwy5cWzoxgvhzdI5WXRmGg%2Fab9L57npC5ni7fQ6flyoqMPzO8L0GOqUBMuhTyzBfZXtf%2Ff%2Fhg44zxXHktTg0lPA%2FYtchZ5Wys%2F1CgZgb6w8PSkq%2BnBJOXoslm7gepxqB5%2BIPVmKoXCrJ4DfdQK2hY4VdOJ16Gn%2Fu8SrF8xgYw125CmTWrbANN48loKgcC%2BskdxvGiwbl3u2AJNRIusyHBewZDwgxAHFLcoH%2BXnpWk3UKI3ZQNa%2BLE1ASJPjek%2FeFyTC7KbvkLJW2CSN1RiX1&X-Amz-Signature=d4c4fdd5ece66e816a568d19b8e065828f60d93df0af756b8882fb22d89603bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
