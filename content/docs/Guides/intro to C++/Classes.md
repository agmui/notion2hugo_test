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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWAQZXE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIH7GqsWKaxTVJRm2koH5zNARp4uh0MBlP54bxS%2FTqwVkAiEA8fcpZgixBoE%2BrckaJVcfyUR%2FnztATAQQKKhuHi3jJ6kqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS8M%2BpFtrPWHkvISyrcAy4quSlA4ZDruUqsVQuxpfQNbBcng0aLjs7cyce2fpQPNp4BYQY5WyNXa34xIjoIqy4myDEHbHUOzv9KrFqiJjMI2nA5EsOsBoBc7e0IjqmVwzSX8ov6jpM0%2BhrgQsbGugRevBagLbktT3pxHS9Mtn63RG3hTfAigVTEqIJXU6B%2BhJJKWC5%2FrdpPV42OjZRNiO15pKtL5aHbOkDcH1GjbB7xtqMQ%2B2RM2smBnV6mJAzXBlg6WipyXhwfo5CR%2FKHDbcChc1HhayRTaa5LQnqQk7x%2B%2BUJ%2FgxbEExvXtoDLN5q%2FQVv9Qxdnau3kEEzzUMLjnAZV1pzqem6hQjuP4Ouveh4ua2H7NoLg2ra4ymW2fpKNbQ6ftgf6ouXXdO77uHtb7WHJX3NGAiKqhLExCxOD2tj5Wqro76MW2pwWjf52MVKJC5wg8Oab%2BglLWQtNB5b3Q02%2FW39b7QVa%2BSHfHsxhXwKcGgYhqBUqy%2Bk9jUnMNHjFHAcFrwVBB9Zkpf376P5uwwIbs3H4l3cvcWJexM7%2BMmqT5GX6cP1v9He4EkTZvQgaW5a66DrcPX3QnV6uXq%2FXyrOqglY9oAN%2F6ojE6jnPAh9xrdRe6ym8ND3Cp246oy%2FAVJhTFLY%2Fwt87O2dRMLqn4sIGOqUBCRjD9Ubo3QCRO0PWk8VL6oxBcix%2Fi89tEhCbMJfXKIdoE5JSC7IB3lawmDYU9DSutR%2BmwkvxNgnGFbAYqDNNRgfnu3Bxxxu%2FhYa%2B9RmR6hPxI5pjo%2FpirsBdUbYNe8c8FUrHQCj9S%2FAyQz0JUHVn7l229qgaXBxoL3GRhE%2BEAwf62OuUzpzZNmrl42B%2FNL4n7Ji7KPBTLDa7OqdXtZygIEaEhMtK&X-Amz-Signature=aed2fb296f14b29d2a945f5e66c7dc91151d22e82c6ffa00b135b8c80a0dda76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
