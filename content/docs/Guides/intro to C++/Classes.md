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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGTZLYG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T161002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIANKoU7c2FI4XOOvN4qOQEw7RAvSvg1J5NQl%2BkzW%2Fr8aAiEAsW1SAEGy9JqJhlL7a0GWGUxgDqRSQtcHq1VZcksn860q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKUoNRl4cm1fSTi8FCrcA7b18VanNYC368nJHW8QFoCRVDDTG05LNwBNIZhsh13fpF7g%2Bj1%2BsPqkznZOR24Z0PXf3xNhG0HCp3d6T8GfyN6z8W8sKGM2WEFZ%2BQmnTrFJXADpwSKsQVc1ExDXLVMzgpDVXtZUzU5ewAhG9KA6vrhgRLT8rdXNGIJnmKWJq8oYzEHIBVgJqyO%2B%2BnuMcrorrKOQNj6pVWN1bXF8jJc2C0KBl%2BzxRwfYGKqUzKZvV4uHicgpc3LmfRSjmyP82tsrwKWaa9aDuAStD3G%2Fr%2FxgYm3b4WBUZWhcN4IDSVeYeFhLEocYrYj1R5MgUFqPQDce6XC5FA0%2BHF5CHpoiYvI0j8T6HEGni%2B2COOfN4bNtudmL4L%2BP3nCRtDbd91OfRb3CqT4pSJe4hx9JJfghnfrGZcTa2ls9rei8PztmkFSFaBq%2FOArXLeQ7cZSrCuhubq5WWia4iwd1%2B%2BocLLIryzuE3sYZiiP6IQuIrzpL7vmTImmc35WVuRK58F3KRCgrgbf6Q5tWPHAHb%2Ff%2BuNB%2FF%2ByBHuILJO5dCBXRz0BEnSnULoyNz8IwnPs7B4TmbWsMzLIIsxV0Py1R9AcqxPzv8qYAK%2BG63RN%2BXxgcVzZjET2BMJaTREJPSQIn9CtRUIQNMPmU5r4GOqUB4zJpZHPSwFqHJye2eQlIyOI2IGvXeRTEYHu2DiqmOHuV9%2FrbyF0cH1XZdxpmjexXCQUMeB016xksrtYjebvCQa%2B%2FpB7aH%2F2wHnUirC%2BHU7IvykHkv87cUqhK7GlV%2F5pDZq1oifwqUrxHnmPcqHGLbIdaaIkg4KfLPVqSXyU37NLO3p7%2B%2FZh0ZVs1iHlvI4Vk0Y6hm95m6PIsgyOwZMU%2FlyjU5vQl&X-Amz-Signature=8f101e76dd26488913384546f3543cda6e9e88d75c15116f86964bc3ba050579&X-Amz-SignedHeaders=host&x-id=GetObject)

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
