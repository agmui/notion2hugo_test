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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPOIQNEW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB8fOhnT895bZwmVrhXcE%2FE2BmeKAj5W%2FEjTBU1ZiemQIhAP3aKBGR9Y2HyyqVH8wq4qJssjvcfL104JOcIRB3ZQY6Kv8DCDAQABoMNjM3NDIzMTgzODA1Igzq767%2BTVoQGh8IrgAq3ANKXQWfL%2FY0AiFrzwIlVNzZg60HRXIU64BK2Pufq9oEYTJVntipKS0JtyfLS33H6Cxpt%2BuWbsYj2cEEVv6ildYQrVQhX%2BpApen5R%2BT%2FlXujhNZKVOriQDakvJKYxrJRxwHJSJXcGyvNAgLyiwFnQpOIKghVRUANjBi5EdDvHZJxJXac%2BB903UmYhiF5IUAEXu5KmK%2BuzLh%2B6xaMqYGaWN%2BKND4Gx3IMq9E2bKPq1gD951fOKKE%2B%2BTl%2BEeI6a4idsjmhVjIGBbHZXG6AvYAUnxomCcAvbdGZrMlb0NY4VU2n8zrTlz4FZmGiUY1HLCVv5Yj8RUOnRvaPXlbA6iDLWFiVQ24JjxRFESXqIdXil4OyDvOUNrKBURZyP50NsLPtGex1lmdeBaredjViUxoWsJxmrcu8vPSFRQIaJ15Im6r76LZ7RZ9DgYQToodwyo8j%2BYhlTtPhsF0jbaHP2Bn4NDrOBkZfFOW%2BUUceGO6BdRbEHdML5oEO6A479V7EThLlCOTIyTlBnCySSfHErrNhjpBEvoZH3l4bm%2BANp%2FGgsMvhtZvDDIpXdgU76Vvxt3Y9CHwl8n8IAs7KIcjQAwVp58e4pxO3vp7H0xOWp80sg7nmuIHHa8Nn0cJLWbX6VDCCsePABjqkAc8hnMRFkxAZc0ZGN6c3kFl5Ip8Q9D%2BkVU2s6ldAG2ABhaEusgkP3CHMwAqsw%2FNPOlss1gzW4Rs%2Fxx6cEjxzFe3XvWUpXZlw3UJ1OUl6Qjluazhg894SgYqonBybhxTHlwPWMC70nvhfmEbyxALRqMhwqRFCWUvpXnf7YStMYmYZMNq8pKJM53rkQZcbZ1SM8xcSsnKg5sx5ilpi4Nx7LzmIq5rX&X-Amz-Signature=c83bdfaadbb59ed843ba47f372c016a7731dda077052f9fe96187af4af17a798&X-Amz-SignedHeaders=host&x-id=GetObject)

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
