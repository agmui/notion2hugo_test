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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZCAJEX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDMExpKqzdCor%2By1bPZbQOEckpbrgwAfCau6%2BZp1aaV%2FQIhAJSOaX%2FEaSIdlGQWXf8RG2dSUjeXu3yLJ7coIrI4wlGeKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH3cV95UWWiana%2Fmcq3ANtjRRLNU6AXU2iOy5wjkvHPJFIkxziRPMjwOK75%2BJgJ5pPTrD%2F3kWf24s1KzZBasoTFNYHqXfp6YZxm8BYeRQEXfihqR440rWzyltSdI4M%2B%2Fk21udgjVWlX7DaU7vtFYVrUVmten%2Fhr2nuz2OYA6okcg78zW1XTU0SpSIlPJuMp0O%2BZU8Ods7M8wPEAh2utbqF4k6RqgxZ6EyjHLIsbrThp4Ji1QDC7jW1PDOAO323UAALi8iOIHp1mWRLWlLUgNd1mCt8sm5158if27gKd%2BEP4zvUmpDZMXtoDShdt16iZlSGyFGtrMRu9hO3m14w4Yx6QD7FXcHUqTWbK6T8DrzKepdUl4HPMfrAGgGCy%2Fzqy8HrLJz4dR8zCxH4J3WncVOrDWQuqi2b7Ix3XU0IMyGmk0gC4BlLmXRCsWU6%2Bq5DgqSL3SdnaPpO89u7nCvAj5fjAmYqeMErBTK0EhawZgKOyFd84kf0GqxvLpKEvf2UhjD2rYeMwLosmFYK7exemt2VmahrOE9%2FXOis%2FvO67N9ym7Ne1DAxuLEt14NyvYrR6oErhwLAo3tgv3zOJd%2FbaFoeTGiYM%2BOY3Ie1OsuJwN9rR5FIQGgMf0v22LgZiwwH8EHqFgGzzfncG8jLRDC5n6DEBjqkAcWu6qBab%2B6Pi063CZB1PauVS7cwl5lgd9epPLJ10SlnV4Kvp8S7PvhGLfhQPviXDf4rWRKWIjyxKN4ObzoXDb3Wl2S4YgQXcOtljlpIokeT01JbzXKGFnEJY7rOFKNd3BubyKmWL52%2B3Pl6%2BKUozDpc8vIRQy66mm7f4lfEYgtlCGYQZqa2vNRrVo4AMeuRlQiI4HRaGMopanjLGpLqKQdzbA85&X-Amz-Signature=61d39bc11345e54e075d5480d523a0f9bc2d35858b170c760e02f94152b5dc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
