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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWE72GF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDfV7rZXo8u22MtnTkq09RZEQTR8u9vsdUQZ%2F1dx1E%2FJQIhAKyWuYiXdLo0OkSJFwOsYFl3N3lHhZ8zrJBqO%2B3u%2FUYJKv8DCE0QABoMNjM3NDIzMTgzODA1Igzj8%2FXtWKfKdWEU6Ggq3AMQYojAOQJ2FuAvpmnipGnpt1A31NLEF%2B8rsmkdL1v2BgPecrf8Jl8gsJzn5WD7ydjhf1grPdI0SMHTfjqUquaLAoqULWiIHhektGeUzAIU%2F42OJvkZQCLmdInS6V%2Bkg96TkJCmMNs147y8ljt%2B1N2bMY5jyhge%2B%2BMNZ5Y4YejQb15vYYEn7KKmLza3B0InIQb34y1uw%2Fu%2Bts0PZUeCafRmXKzPal1J7S1pLt1vCKBk%2FywhnWiXMSJ%2BSzH%2FM3e%2BXaLE37kUzpfYaAtKZn1BGCdAG%2FJQZR5JHUYz2tKpzAK2pMsUwSX6cWlQlUEEKA9n%2BzNt3SGrSa%2Bp7bMiN7CejMk%2BgpGJy2q6V28h4UQMc0eZeR8oi3QVymYJt7EHmw34n4B0Xn2IIqek2mXjtsjpuy6NFhTCFYU8d%2BvVOzArrBR8xnX7rTPJa3KfCbiW0NF1okCIJ%2B6fVyD9rYkngp5FYKhAcfrTZz59gOPMeEPzSv42miKiS%2FE2edW3%2FtfHIRckA%2BiTX8vJDjgeAoKF4VQexjQiQJZm2lBYPg%2FDHhfyHOEXwUOzTNmMz0JXuKya38a3L%2FwF%2F2pkehZYgZ5EcoOrjh1hQCg0%2Bi87tI1Fp9Qg8BmirFJPO04oEeT5IQN1cjCloK2%2BBjqkAWuSIgu7cOckM6Owgv5AUJt3LJWYfznBxir%2FEjQ5NSFnOPa5qEQJBL2pQJ3FOh1ySKKtbmgezc71QROZxCxTJRwiLNSzcjTV24UOS2O1OoYfZDfoMkFpjwvVdkddtJQ%2BkZT3jilCjnwGF9%2BowhgeJj33No5olfDo9XPVnUozJ5hUey5cxtA4%2B1yckV%2BJWkcTZUViTL5OADEW8Deefimf0nzBbGpO&X-Amz-Signature=6385725908445f8a514ffe6289e2d42f51f5549152e05e0b31a350c2eda89900&X-Amz-SignedHeaders=host&x-id=GetObject)

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
