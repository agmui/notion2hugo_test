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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625K5AXCT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArGl%2FFbX3Ztobe3mXGYz5bJ4FDKjUjiPgQm%2BiNY0IUqAiEA%2FgVTUmwlCPGdh5Eq4JfFs7BJ96X5fFyH0xCf3Asoj2YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxO%2Bxn%2FVSNMQnkRlircAyQAiQ4f1jqdedD2RgGGtdsEEzHctYgrW3Z5rZ1gBKcr%2FD3t4cTD3ZZAnZAYSxgUl7PaQ6%2F7GFvKkFSMe37RhQcajVUBAllwz7EJpxJeTijbNdiC%2BXoHh5pfKMHEtC5HayTCya5biZJzEz%2B56SKDBK3aWZNftffQp0lnFbOl229I5HFrS%2FloWiFSJXza9hZR0NuFv58%2F3kPpqNWk3w2PIRmGJ7hTah84bOhet5EFb7z%2FEX%2BUA0RoAoF4cyxiIYb0wY4Y4FA91t2niLNeUi7iFEtRQgU3FPUd1t3w%2FMLsuMRjOb6YfVFq%2BzYcTW29f20Duw8jAs4Y87iZY%2FmtQPwhcRRzYVIfH%2FY4Cfk5xBSkO12RawjIPvS5sHt%2FyEwKsJGyM1E%2B3EuV%2B%2B65kEr6sPTZEMxUBWbul6YhzFXCqbSX2dzPvcGQRQ4ffxvNCdmI8UHkqxxNa4mCnQHELFJk4sqQBw5KV3n5GJ8e%2Bjcn%2Be9JWDskntBO1eG%2Fkr72vZLbQLReGWYDb3sfzyXtJw4aseOonV6ayGzAQ6IPHk7pP5Ivuf7alL%2BBVo%2F45frHB9cf8RrqrPN7RyDlRDYjlVIpyn%2BKAu5sFWujSEu%2FCHUiki0UMmf4gS3TOUleF8K7g7%2BHMMP2kL4GOqUBUa7HqqV1q008tMnJRVogQ9hEY5kD5njhi1MwCGi5rC2wQKekNaDkF0WZjNbs2%2F%2F3%2BaPHePdYzHm0F9fnXM8IXq8WzV0rlMmUVuaEAnSzRMc27DuxHw6L7Mum%2FPWxiBrNzHqX7DwRSVTWq9sh%2BmQLobLWD2Ikg3YizYgj8lmhMSfT1qkUg9sTsYKT9tsEGoo9eyjUPjWXl11b04J5uTiIPNjrna51&X-Amz-Signature=a202cfabd4e1c17a5eccde43e21230f84ece18121957064a6360ed90a02a2760&X-Amz-SignedHeaders=host&x-id=GetObject)

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
