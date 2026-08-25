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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDY2PMM%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIASVNMHvjCLvlgVkcVstTyTYbAncHV3hA18tLWBe9%2ByOAiARFSgSPZkn7zNFhREljR%2Bc%2Fm%2B1qosrphji816Hst%2BZ3iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpBPxfL5zFVKb0imAKtwDwjVmkxMZYdO3Tp%2BfbO8P91CSZC3VoHTGWDtNGsd9EUrRIVqsYifqyJ5InbKve4j1pwMSi7LBr3EZGxh9ZbVsN9zgaJ6GuSaXGnPMS8tve58mXqJ7t%2FCvZ3g5xCbmM3YexYDI4dbntJBibdDTkDMxs%2FzZOsZRqntdzzmDNE%2B8CUMeVKDlUnuvSXuNwzIoMirHD%2B1HsOj%2BBLT6xHyeeW7Ry9IS5qfpnyviVjP%2B1PKhnI0Tnvpjlx6hJ3%2BMvt0GJMbxmWHQfToFsgBxxRzTs7zYl4i1Yjdy%2BNiMsU%2Bd7gOY9NZ4dPnyP81ZOj9e4Ua1DYlN%2BPr86UQFyKTQTayTZPW549%2BPMaSVkZJXfy7fwdeHM1FnlyIxQzPwY7FVz1gSLWvxQyeXF2SHWKgQUqDE%2Brz9oWSzTXGgKXyMEqre%2Bvusdkp5O00JgPgctQKPGMzg8Dt0Y1xDBcyQFoVdHa%2Fc6endyNrePKOW6RMhgm0wkEkeu4bfe6t6LYoTaKCM4HPao1Cs8OI9GHaVaycZM6kDXbBPcnWuoGGNeLImcYunvhAdiWNdn8MyIuiFb0z9dpzILUzLRHMpB7vdGbY%2B%2BkC9%2Fhbjc0VQoaEVMxREDldRMn1mGYzFJSpLJu2CRYFxe1kwmtKz1AY6pgHK2xlZEO5awEvFiL6nn9m1EZLEO35UK0neCWzSXIqIQQ2CFeEF4GCE3MjGcIKtNkJn8rbrNb5HNuS014AaXw7eNUadmgXqYa%2F0ZPl%2F5%2FM8IE8Q8F6s3qvr%2BySNV%2B3OZqTlJ755wN4o8gwSQ8TZl35d4ooeLE%2BPDy6MtdqNfLyJwhcJ2PHJzCR2mk8PK11kA0CHWx9ngYyyFxaHMMJyczYz5dMmxsWA&X-Amz-Signature=8e99d184f458ebe9391a7fd460aa9ec71a416ac03645cc0d805d4b75b0f3d181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
