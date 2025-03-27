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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVETK5F7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc69H%2BVOc%2BOXJdp2en%2FLJBL3yqsQ9pDjAeK%2FSOc6eNZAIhAMy7sybQB9EvE%2Bo6xz%2FlF5abLSpXBN%2FXxnAy0ZONEYZYKv8DCD0QABoMNjM3NDIzMTgzODA1IgzEnrP6et5ZznhoU5Aq3ANe70kg%2BJeyVIA0x%2B5MaEib1LBXZpkyvxamOdanIV6daDxthDNCsPLO07MA81bR%2FsXIpufkJPetF5aoax4jC7JJ%2FCLdhiNRIT0EpawjunG9XeNn8tBkmb0l8nW63k2Qpv6OMVGqxyrB0%2BJD3htXwyN0EG79QqV22a0vBbuVumhu4K70i2SkxOJNYgjpEXMIby5YnraNf7IvlXWhUr6%2FDM4KSyiqcRVE6FCNHyXAh4hktgDr6y0kGEmjVhOLMhMoqQee56wM%2Bog5SuOLbpkCiQhn0MAJ%2FMIOkFh0ILJLK8rs3jVrK3TkTFy%2FsrktZOO1yP4XLYQVHTmQ0lQjXsZp7IRG%2FSprSr0a%2BiJpVLyTvG4qqAoZLWEeCW%2F3MKxmGRYtjCvY%2B3r4llBQ9QNYc7p%2FMaVV5vN8V3dnbEsNhBOzqPUbnEgOd5HLTXb%2B73paVu4N8rrbuFv3O%2Fejajem4%2FCu5oqi6BecMAVFeXBZzrHPfpfanZQI35GOXN9SiBhRBHmUDBbZlKW4QqPfq40JSyL7Nj7bdhhQwwrUVxwmyperkcDomdoFCD%2FBPNFQroNT3synJUBP6Bt9YWnv1sETLhXRpUK9VURReBBqqH%2F304d52YUhe6ZMWT5YQQu1SPF62jDOiZO%2FBjqkAVMNvJivzB5sfeXjsE7eqzX%2F%2BhpJZgaqf8PN3f%2BW%2FRxSC00%2BkMM2Pz7BycF8jJEGQGabT70zFPX4CclF5SkU66pARAmPoBA2aR90uEBj5NZ%2FZPzksJqUd3M7Qoo58l7YlVllCxinlWsbLbGspmvyD7BS9JaaRcbuiHwXAWO%2FGLf6%2FjnoYKoUjFJkYLnRH4TDwYNa0VTmu%2FeqzdgbkKXiXkIoo1A%2B&X-Amz-Signature=a2466fdcda530e96a2bb006f4f018137230a1ef482b1e55abaf594b6c46c02d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
