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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTKOWYU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMi6tflCSecPilJYG0cW9i%2FumbRx3VUdZPOILsbDqTLwIgDVEVcz%2F2YW24zv7SDfadcd5HmpkVEXapun%2FuaMVwde8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5PROqbPf8%2FCD7TbyrcA4v57PA%2BcdzgBWd2CIJGdQhm%2FIOZoUIaAUe3KyBGRvmCOxzLIX9Wwr0pSwf5%2B93hwCjVL26gI9O1sAzNYI8NIabwN5FbRHsLJD8K9MDJExbIaAzLTLxOM9faz9v4tBILghGxNSfFqOppDr8yUCUKcGDA6J7GKF5ugm8PvAHSUkcTR3kOKY94wPng5ypsVmr6txUCKfDGXPRfbJwbiLyhat5IIqto1r%2BBGqmFT1nD5pObrAcIaKpOUfDsGUNmOSE9cRreyABYUP%2BM80TTRkyGehqJzeXe6XaVjZ%2BWMY0b3apPsTN%2FyZufhwPpZDpLWMe2wnA3mVlxLeeL5RJJoGghDS1DUJ%2F2zFL16fFskavAGRo88mGLXeXU93E8AIl5Ra5MN%2FI%2F9fwQyhqk5q3i%2FeyZbWPvHiQOP2d9iz%2FXI%2BFOSMV1%2BRERqZqGJ1g7JQSR2e3zinb0yRItHlhPHI0QQlDlsOtLguus37Zh8f2CHFGFXLRu8JsR5nT0rd7BKw5agSZ6T3qC50AQKLOhekBYeVg1UdGuNxpdDuGMzsugcSLcGOYSTSrPCFDxhF%2BZxRYoKEzKJSfFH6Ug6pZgVlF0MiCFZXdlG6F7iNY4v%2Bwsay5TZQyLWKG5yWD25gyKjgbRMIyw2MIGOqUBVu6Yg01fFxD0YkmXniee%2BPdFTaRk%2BNSHGQLxSp6JU3GtyHfB99o3qEOYUBmTKtq7wbJ7EqXlYOCOYcfem1FZAem0YEPreHSIWOTfWX%2BlIHuIsf4FZ4aUky17qROptD8DhYhOjPDRLoQsA5vkc%2Ffe69qtFQC%2F%2BhFlIp77yHGWWZJr9Q%2Fc220fSBy%2BRTuGqEFbZ1AMKhV6SVi8kj5MN28btgiqtF7D&X-Amz-Signature=20957865eacb70dd8586ceebfbfb82b7c7789764aed356d82477e58036b1265b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
