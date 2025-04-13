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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7YMY3XG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIH%2FickX9HujccVj7dFEM4hLrIjwws%2F%2FR7QgVnDgh%2BpiJAiEAnfKFmGoXXcMPnlzKakDIzttfcY%2BhTaHHm8YKbK5GCL8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrrTeMwfUvMf6duESrcA%2F83bg%2BrcVpUbu0c34gcQYaQtwxxs553ZYJnNXEGON8%2BJkBRt3%2Br0V0JPhjoWgrPvc1V4xue2VsALKg57KiKluTQaxgVOU2el2Kc%2BX%2F9ETRh%2BL2FbJWQE3Z%2BtvmPXPDQTlDWd52Ra2hm7grY%2BjJcqNXfXOMQ%2Fb32Q9eG3KUW1lmGYNliZ1u%2FEWkp04Nss6S08OElF1tKaybnDqpM%2Bk25tYYbcER4uqVxsrm5CQvKBRZ5g9%2F%2BadLN1FXqv5WomuRSQySSLahHUVFKDws%2FfyZAGc8ffhMiWd4n4jEh%2FG1bCkYvbLerGMbCTTm7rxzregKDpVS4FBO%2FlnAmC2U1Ui9VipH6cbZxwI6cHaYVtoJoISctn%2FgjvbyI%2FTPOOr9pS4WdW28zrhecFSsYQ9kSOlZp2U%2FhBI6vmOQca3i2cuJTzsiv1UKaFqqZRin8dAHjETRvTYy41n9XrQ3ifR9V4apv1oBPPEWVSYhEehaTWu0aL6zd7%2B8T24tPVNLC5irb5F1kSp1V0nzkleROqgJESdZYvXBpfn3WSOmk53p5YJlN5bp0C56SCH2ULmUBmUoLP8tgXnf8Dq8IftbXtE4V85HjJ8IBCZyqU5Njz2TzCBcqZx6nwcvWPJ2lTQ%2FNJoRvMKaC8b8GOqUBJ9aivKw8S0mExCv5LrE50XRtHQLjwXeL6WLS7TsbLJlUq8ZWYuhpr8%2BdBx9y9uzEZrz84I1FAO01LvmSkmg23O9I8GyeJpPU8150uvSPxISD7WMmXk7v3TfItItTGZJtHQgiXDRWwGNEtKu6hRvY6d9ebiHkJes%2BxUFKCT0Q0dx3CHPjkx9lRMrryFOhsolhe%2FK08%2BNtp5TS0QK%2BoC4ngVXpXQaE&X-Amz-Signature=29311f6d01f2d56cccae0494d45416ade2d5a5fcea5067558bbb6782feedea92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
