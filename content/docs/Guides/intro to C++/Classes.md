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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FCR3C56%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYlH8060nUf9wu09TPgUKK4R6V8Zfoko6S8UOo%2FMBZKAIhAJlVahQAQVAJ3BB3abyn8PwiYEY8ibaNRO3EmXCQ%2F3J%2FKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzoSJWC5e1KXMtKKQq3AMiPQUepW0tcfFBREY79XXF5jn2N8d6v0aRqYMwfLDD1wRXncbAt2F0U%2Fp%2BuM0tleKo3kvv%2FH%2Bl%2FVGG3a9dRMBojefMSwLS%2BxfNDXK5jwiJWHz8cu1gO8jOhsZoQTA%2BQB%2F2s5ZmRAsEpeUHFTgvFZ9QZnAbH2y4ciuM9%2FbEZD9pzwRGHDSA7XU5nGjJSmoZeFfzXJ6jwnnhm8rF0s4H3I3dN%2FkuPysm9b0YMwvFb4DjjV7IY1gGhMmVA17ZxwwryZkz8FWNSRviS5RdaokvBZKvxPtwfJWAAd1zPbnojiiajeeZXpLDrngkHo54nwl52nBfGWjzCqgrU4w7JplSdLQO5QLZIhAxZxswP6HKgWmY2W5uyFhiDH5V2lP9Y%2BqACHRV%2BCWGN629H1AbCfnwwire0uRedRO72STIiTK7UBIGGI2gD5UAx%2FHp7nVBobrMrP7yDkiI%2B06Yqnroi42Sk3i1yDEDVNI8PGfinXpe1vBNdjBMG%2FEEOZ5TfpS%2B%2FqH9Yhx%2B5rwTI6NqNuOLNxoF%2BaKxBKu%2Bh2B8lj0z1N1jtA5OtkYCqBe4iAB7ZOfxHdruMLjydeJUPc2S%2FXBg9mnh3ubrDnFyviuf%2BERuvuhkI3omWlSzMajiOt0lPXWrLDDOm6y9BjqkAYs1zuxN%2BiWP9s40zSdHD82is5BmhowxBKhLPkPJO9dozuYn%2BZWYmzpxKnhWQV8vBxvTPQBTIfN%2BGEnWQ6xrj96CiI9gtoU%2Bg1WaAUQwaHOvh1sQkaXYPGEsol0UroJvwVS4%2Fbn1E%2B33xdR1QnFfT6zn7tH9f3V1OYfXRL%2FzIdrs72iq8DdcP8%2FA%2BygZEkmeqw2q3rUkqErhxtdnALHEzx0pLD14&X-Amz-Signature=445c355099a89cbf061375c5bd32b5f09dd5d5b56755b9422bc9f069ef177d81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
