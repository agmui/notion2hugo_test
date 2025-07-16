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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3V6LVB2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDqVQDnfrSb4qxLh05ThTxp%2BuMdqdcQkXzF8tvMcAWaHgIhAIUG1qu7mu389BVr9fSwFNGxljsRXi%2FwCdlqQgp4vw8kKv8DCFgQABoMNjM3NDIzMTgzODA1Igzs1X8q8iM43fchR1gq3APwytHc9Va2HioWFN5r4yBZws59NyXl6pLy0JFCCKGbCVVzsOw%2FVgyBynH%2BiGa9ikRwRQX91Z%2BQrrJuIlfvHZP75zH52z7D4WwgLYpuucnZtKBaHIM%2Bi8LlBsJvGk9W0STr0PxUTiT%2FcUCeo8NkkKCnPtuyTGrHh1KY0i1Pqn3MEwEMwFPaPm2hhuk5xc2%2FZqptiVJaOJxEWIDe6p5fd1Ifcts1HYMcHlE6nbSO1wcPmD4OGQxyYp6QwRVUS%2Bzi%2BKVRkk529L2zmFFZUI%2FbuOvaDWYrTVzy6Z4%2FZANT6eRP30oBb7l7Pb4YVF%2FlC%2BHRNqGNKzMVrtUgUIW5QqKLsKzpU01GoNA5NLFoUIJ63olpiNqZIcMBmjYmT5FGtO31tFYhjShc0duO%2F21L2eD4D29EaGBTV7pAxvWm7FqR%2FbgYtyTlyknQpXsMxRfXPYeuJluFoDCTdb%2F37J6034FvUQ1xWuSi7yf1XXbYE6r1ZLdZLBlWJBoaPAys6rnZGLXKdggiaCEdv4yw2tE5YdR8qAQI8YFk6IkQtGnu1DUdHSMIOdUGBK7AIAK4y92W88p70SbDFsZwn3JKTYQDCxckg1JpQw%2B1TaBR%2BCo%2F9emoEyV4mr9Mdgzqi7zNie2qczC5kd3DBjqkASG6J4gYGtAN9Jf1Skown8DvmSbGrWQqyDiGCdDvLRZPe2oYOAuf7ZXytvdLr12ZtWWZ%2F2JMWc4d2ymKQ4mF0fw6rCCtfzD0alEpzirUcjo1vkYXwAjybVPFFEcCLBT%2FE6I91kpKwf1C7tPtU4suuN%2F%2BGbAg1X%2BKqzsuHIoo%2BxaDUdsMpJV0NYf0Rit8%2F6Vit3lx%2B4O367KyARMNlMlOKyuysK0Z&X-Amz-Signature=adccc84311cd17bd3e4e05c7f6333239d50449dc33c97aa9debd6600fbe58fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
