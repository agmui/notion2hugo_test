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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2PLMFOV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9iANe9n%2FWp6qUiDkDHwXNj%2Fkbs6uxw5rl2e1PyEvZFAIhALQzOcUWAd0i612N00JFrB4Jiw%2FoPDyazUG2U18nAbBfKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3EOdtedZ%2FvzF%2Fx8gq3AMW3kFy3hqkDcFWqxFrlX3DA70%2BoHiQXoqxbutcjLswjCfkOeftY0ybJqvOOMEQmg4jfVfDP9o6rX0lZxjsBBqwK55qITovVbNI2eSWAozy34OIfWCVWx9U3ZUqatsr7hbw7PigdlB4WM5ttmyP%2BV%2Bxa7WukA%2FWS9PHhyWn8N8NzNQNYZaxC6Y%2B6qJagwbTpv5zgT%2F%2BI16nH%2Fak0Fe1Nvv%2BoBjBXb9HUilaKKUPdIDcAowPXJ2HB0WVn0WZXrFJirVmetE1dE81y80GF1LrgaxFntqQvNgUYjA%2FxMI8%2B8bM7D4SnCn0egSKtGFEqg65Ibnnz9eAbYVVFa7vpw5hCocd89L8JXrc14aFOl75IWymheya3MQc3s1HJa8gOtpkGB1gEJBH8CjUtEU2sQBsSKYuG8UTjwCZJK7ne5e%2FMjkFsEHG%2F8EZHChuTSAydU6CioIIK%2FJTjOT5eWdRFcrWNaTqsA2TdLJr1SlIDa4kURQCwjJI5afSttSf6DUR5TRDDpGgoGPCtoswXRVOr0M16fx1QthoeAm0Hb2Zz5kSJ%2B%2B6XU5YYBv1ACl0YkkXE6TfNrDxeSyXvoE5XhmaLiRwwTsWfZN7xMcI4GwvejWyTfeEaLpQpOH01iaOWva5mjCH1b7DBjqkARIj8EwzH6YdQS62AbwKm4Wxm0ybMYPMcea1CXowhUyuledZOnP%2FesB5wl6IDnhJFRkj5fOUWUoq9lWx%2BNVikuLEe0UoSNgDoIqzuAA1WFa4SnIFJ3UBrrFyqhOY1g85xz0mY40134e4MMwVzin%2BRKXi4yBOhSzCijEpLspOCwO%2B6bASPfCIuCeb4H01RFHB9lorcdofzD2B7Zb3shac6b0JjEZw&X-Amz-Signature=54bf82a9d401c21873c14538a77494f137e9170644735addcc5c8cb2084aad5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
