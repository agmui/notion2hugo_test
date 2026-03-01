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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N62NLVP%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD590If4UHzOffkHP5NzHYRbFtvlAMVreo7wqKfN1iflwIhAOvomlEBYez1WjrZska78XJudeG3hJiZIc7YblC4hA1UKv8DCGMQABoMNjM3NDIzMTgzODA1IgwI%2FAvZ2mRR1vdpBuAq3AMNvZAQ3UCDE38Ecf4QO7VURFsdy7pTrIntqPRRFAzDbFGskQRsz0Hayy90at3DPWMN695K6FvtYCKM868e9k%2FQ48zrUHE9%2Fqcf8nxHPaVISBMskA1bAiMjO5C5ZgFdSKv0Rv%2BpJp2DdWQPVeF36Qe0xy6pc5YzE1FkG%2B%2BbT9Gw6Ujwk%2FXlXKcuFOAvHzO09VzC5dAXpbN%2Fe0JrMfi9jnVznRDmESLu6MNR%2FZ9R6cDq40VNXWcx2hpLJFugV%2FtSURrYsGzG83%2BDYE1ydArFimVVAa6OzlN787KPqbpwW3r%2BopSL7yA4k0KGWBOlSzGq5dHY%2FLYfjyGFE37569t5ZhJ8yB146KQS8QwfgdYdfVI4L9DEZ2ezaFdBbjmNi92IkzPPM5Qdnc3VNUfQzD8HgFYo216rov39Z9mSytA7uo9t7Ism5%2BCx4zO6uzjaQm0Crki%2BWo8YJnTywAS%2FupfKWvrccY6KxOMSdFjJMPtM87U94WG8Vrg%2FVyL%2B2SxcQDTa8ZFKIM6anGnTNJAelfvcdiOf96pD5JEnBHAhy%2BSB%2FAxR6t7npalNEikIKjDAjPs6Uwr4WJS0f6j0COduqJll854LXMm%2FHe0Ins9YLWowp9jmp6srwg2GI2JxeKWlKTCfr47NBjqkASd7PTXJzvPXWShZXXU%2B%2FKCguLxI9zZ4Cca1gC1oCojLxy96TLA03bTHhfXhbNn5y2capfTGhOHxSuYMatm50ysvpZzDz8gXgtESAoduXD7uRU%2F%2B4x9HngWokSGtBRPJvewH2ai1TOE9hHF1A3yuIo%2Fg6BM6mmygJYEMpWFGI5J1iUn3rQUX3qs8jLCYUm9V1Sjkv2XHkkdl4FOQTUlTeOCwXShq&X-Amz-Signature=1627c276bd3dbf588d90b7cf6d2e149a3d01ebd261552971252f8e7137549fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
