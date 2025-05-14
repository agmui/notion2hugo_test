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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LG5MIPG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDX2DsJ3DVCULFacfZQoX1Q6elW1lOoFm6m5tQefivOsgIhAMJrSgw0hm%2FVTpKFDho77yh2m6kUt%2FPH5CtdIXNIjjk%2FKv8DCBkQABoMNjM3NDIzMTgzODA1IgxSgyYTHUqJnf9sV%2BQq3AMPBLdVU2v89Iww61b%2FnC8SF%2BOsit27o1GWfrwJxWZCzKOZgbw04PFIFJ0QJss3TIQo7FCeiDUu3IMr0kZYUH6Z8lLEVb0B6tU0jffXbgsYbrhKg37kpcLRh70iPMIvlo2y74wOJNjayn0f7ivnt0zQa3jTGy3csMW8RkemXipIiParc6xGkQVPdghDazfoKrwhufjr6eUpr3Cy40swpjkfblwqUyuL%2BRdzgRACR0xyfH8Cf4maUg3sTnRbuLccqhEHSmdqx5Q5J3jO5lu7UmJ7Kc7dH%2BH%2FKj7r0mfPheB0kaDuKfVjybToNO2ylKttC6WjfzTRhwIi1H%2FMa9xP0ticJEZhNZfoGmeeTux%2BKSp6U%2BVuMZVp%2BDV%2FJrlQLmYDrAFPobUhOZshWU%2FETsaGrNNjAPFV85qNXq5M0jqs9Ne2OumVlB1RKR8tkZnzZjoybMt7qzWtLuwgKeGsx1Cvu7ZuUaJpixZ0MdBn7hrBqQcKs1izKEGkvhFOuhUaMBCaw%2BrWtFNe9tswKypuptyW2xaAEQ92bh%2BO%2FSYUzxWiJd2u9n%2B0EeyPlxKlSMSlNRKRdvvgdb2Ua%2BVQ2JTw7blxkW1uuNSdHMd%2BTHjQ5jaVzilJkDbakjf9RH8qfTu2xDCA75LBBjqkAZN4fJy9hIX8jjZc0VmYGRn68f%2FTabv1yAZ9OcGmrKWX%2BLjPIk1kzWPPRsx7EQUzs4fm3l5%2BbQz9LjX45hxCx31BnqakRVsGsHg%2FJiDO3wPi9jEUijXv8BRu0zkBOwGAuZcwbC%2Fu4Wnds0mOvBkOQuKGDolMqsQdzNCcNjpdahhuiLC0keMP4fyDeMqXBYQpqEWtBo8evK2ALr8sTgrbV9E0I5fH&X-Amz-Signature=ac0823e8a4f45dbedf35f8eed6abc7db1085e13401774297ff3989d3a6edcaa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
