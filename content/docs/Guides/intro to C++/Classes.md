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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6DOKQTZ%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDXird961dfFwSJdPXwnqj7ChhV3dhskftYLpyVPt%2BsxAIgeSFt0oyHNqP2fZiX7Gs74gQXDXPmn4XlMtb52W6vNf4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxaSiUkkAnsGTLABircAwXjAOfuRQGGx9Vxr6aQ826S56rItz2lP4zURGmoZCwiKqjQltRRysCjVbjo4tjazbM0YAcxD0cFFIZSjjyH14t%2BRKrwfyzaJHiMdSHxAk9PKDaDbRk5CjtY6%2FpdsgnC8mLMEspg5uD7iFt%2FPNT66tJRMdya7CioyhHWpjSwfbpKkosL7KvWuw4jQkNPfga9EZdVVuMlMjJuiCxtJr03fHctLUWTk6yjHA9sAh9GfmlB4t0IgYHHQxeQoleXzWi%2Bh2szG6q1sQ7LZPxkPGrnzFlhnnC%2F5wpWtZFlZwdw3V5fIsLapfLwSMVFIhdT2aeeaYI3XsLnAdIBaH0ZDs1FIF2Ohc2PPjwbgzDJj56kQ0yU6Cf8wSAejovLOUNfDbkYUlJ8tGHY2Vhldd%2BScRyV32lcsqOoEYZqMF3bWPHuk5irWJQfDdkrOOYnhZhB2WBep5vqSl2TSvkAq%2BDVZsX3jmHcLGY5SoWc9UEdgqav73VasO0DE463ByRR%2Fm0%2FXonLxHKsyZL0JG98VdVyouya5w0GreyY7HAaN4EwD0M%2F0NdJauXmhUuW45GPOqxyQ6lpprRzB1D6v7DM%2B5chHvFUPitq%2FqI%2BfHwCEWEwJA9w6SeVuk0SMiclasU5HjxdMKn5ocoGOqUBIhPCtLaAiJnYwSn9HX60xgZE8BNDW5371zthjgno%2FUH%2BbSF4cKnCm%2BDgPk%2BR8r%2FGffutUzcdmgpeevUtaWvM8wrvO0gDx6wfWnE1ftd55VgKWjf6ZbByypwyBBF6eD6d3YPNw2LQsjRb0feCuxq1KGKXvsOn2Q6tQHLzqaU6BBUgQAVkrQ2plfoO%2F01Lie1BAEfsshigQ8qlfAykWW05wemv%2BoQ1&X-Amz-Signature=515afcd1b098b0283de61c781500672b4f0f7862814da87eaf93a1fc52025944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
