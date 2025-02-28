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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU5SZ4T3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCBI65C2zHs%2FNMl7ihmnP23Tuc4VZxmry3haII7vUtW%2FQIhAP3jDjULm5yiXgdXzJd4c219AsbjPWaniX%2F7S8CLtpwaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTv5GU1brmFrm5j2wq3AMKiDQZ%2Fj%2Fj5Il4MZXhizcfY7%2FzT8xq7kR0R%2Fo613QMNNHEqxwQq8NEGrMC7G7PJgegNVE7Jx2Flm1NWty%2F2O8On6PEY5KyWpSB1kZDVeKVjILcCciXIf%2BbvKatScTPC9A8VZMc8mqAR9emyYBnbyu2yoF8kzeuH4fGH2f%2FYJzD%2F4SneFkzVq3o6%2FHLMjYSaNZ9Zm1YoC0MQhnReMsjIKyc%2BoPe5vyI1CVIAM5QOLFbuZPc7ZhwIt6UxmhvqVxKUNDJiH3Vs50XPdFI0PFoBA2Dl275wXraIJhbHuIgPoNayrdz%2FxiFi4K2bhhySurbP9iDcEVGItOJiXz7%2BCU8hc4ykJ1t8WN5f27GhoUuIEnFXUTcTViIBfgtOJ1AqZgOjpgadilsigKl3HxAGypnSmW78KrnNYxHOy7t0tzjN8rW7OadeNU28JTb%2FYom9n3NoRt4dIBsnmB5rSC2MSfsnKKUacuBtMXIZQMTRDmTydiR%2Bl2RcFQgVosnCSf9yNw%2FkFjKqNIfxEkCD8WNOn9IrSpe0AlqQwihIKooMaFC%2FXencifpTkUNTMyYgBwcdqtIhFpEVx2s%2Fozerpm%2BMNkDhzzCcORWGKtBnmPGSWIGjsH1JxgKP1l%2FG4Z%2B4lwMszCj9oO%2BBjqkASfK4GuVyx6UD3FLiBe2qDqdkQtFtYWCIv7V6JC%2BNxs5fa%2FtQwZh6q0K3KvwW%2FOjgNUDNa5%2BKOzyWlHGX9c1YMF1D7dLblAKMly087Mh1Clrlksde72LJWCj%2B%2FakAz90ODfMPl4pszQYw7wKs4ZJXE69hCSPHtI13wGO8DIZ8%2FQzeqE5jAijDP6IsFvKh9fPAp%2F%2BJ%2FmaIM0Ycj9zYPSw%2BmQfDLbi&X-Amz-Signature=f6f80a85554b701532bdd84fd83f1b42e0f4ee91a5748a2c3b5f359eb59a3e26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
