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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5XTAK4L%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCwGyj8ROOcLzxB03qt2MsOPjsy6H3sdXPzIUYlo87UTQIgNXHyukxmKaEEubVztkcLzehnfwvQUHunqMkpS4u4MPYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPp5IED%2FR5OHkQycaSrcAxxLIeSRLK9Mj%2BnsU1FgSgGzoiqR%2BZ6XPSC6bEM6niwQITYA7Qom6AwuFQcVfwGI6OLG%2FKEGhp%2FKBZX70DsJSHjgvdlPNJFfMq0IP7pg067r4lISAiRlxrv9FERjKcQDCTzOj95FLAREbkgL0aYvN71%2Fdh%2F4FBZp2FPLJmjsxV9CT4arSr3iEij8fe4aT8fS%2BHp1%2FCqCybIm9SObEAft1ackg3qSsncEyPOLQFEnZueFIG7uS02qGmMogE84T9%2B6jp1oSu%2BxZ0PIP7gSrqc97UBMiIXwOyc7mPaRotgdZrViD%2BFhoBsWy%2FinLHfYiGhlZHFuY80BLF4a2ZKNCbIW9wU10RU0BPWiaBkSKZBxkLfwBzhhub%2B5whSVxe0DKr7QXneKd3j1mKDV1Nuo9uYg1Of54dx3EewJnFNoFDy8HgYJnd6gLWiYU5nsEWjpBTIuP3u0G8dk2NRu4Q283iKoAbWGseNcvPCpE1%2BjPLfDWaET63RtLg2w4%2FxZJAYOy%2Fzx1rMMQ4bS9hC94RxBFwWmQaI9TMF363JP0hApOWA0CVtsV3cXoK9CAFKoc8LwsNOAGNUjqh1huXfj51vstuoYgDQ%2BL55wShrnrLWD925m4zS7dboe9O08tCr%2BU454MOLrtL4GOqUB3UpZ1qstI1NzRsUfpN307Hxg7LQCDpaOfmRS7skFSV9E3vMj1wJO1r%2BHyHDJPaHyTu7oOY%2BS30nXz%2B40SNNgf4gJaQoFxfLRMwkeelITlVq9KjtBeBXxzJ%2BXrdhSThxbrrHuHVxxQ1Ej9DPSQdxptpumlyLgllRHVwLAZ0ZWVpiYxv92ZmOxp10wPlmD1vNsnrJJoDlt43SDg74RKVk9UntO%2FYYP&X-Amz-Signature=872f9da475ab5372ccb0c88670d28ae2f0855b56c1dda9eb7625ea03cf5033b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
