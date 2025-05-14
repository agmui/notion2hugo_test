---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZ57UVI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCyiqXsN1Xk6A0%2B5zAUhQn3%2BXxadfNP7SJAkhlHn1bVNQIhAMllK%2FvYMSOSvfies1cRwluxy%2BGRRM1Beg4c6JdjASqyKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMFaqByPBQUilADx8q3ANs1Q%2Bs%2FKDCxJsCDPwOXPLF5DTD%2B7O%2F5%2BkRlV8on2zexBS4TGXSTh%2FJh9PAW%2BXYGZA9f8tnjxLSTGuERVh7ieLyRz8kgvrCygMedExSfq9ZdKX4LQkCdFrYIy%2F%2FH%2FfVEohq1Eb%2FKvjLwBfKVqs9OiFOkClEYaKy%2F8SvVmQlyP6MVF2HFHnM%2FYd9ZyczMqKhjDP0ZpO3KLb9lxmyOise%2BBIBblTZgdce%2Ba8eP93iG6eTsdtqft%2BG8F8eU%2BR1N2UPQe51O2D7eLULAs2GcHow8ay51orGM8cOJ%2FOK6vFygvf4cGLw29enfdGNazV9Sch74vc1fvO027dvLaASLTKvc7%2ByHhSfLpW5M05VWaa8gQXYAGzCWF1dyoWsVLCil3KfbAy7AEjdkt6decFHe%2B0BuP%2Bxlt3LrdIzZdoffSrMH3gjZlvJ%2F3oLkqRJ8sY9Ho2AK9%2FrWmflYUeLpbK4ZgOSMb66UTaeL7hfXq8M36jUBLtOJLELXAQLLxXAOjPOv%2BUHGzDZsJb%2BPaRBBlTm8GXzd9FPJv%2F9sGzifGz1jciuESe4J0cf%2FYHzjXhe53nghvWP9ECrqln%2FPjZpB%2FAgjG%2F8RWmyR0ETaFqQn3gy2lwXccjqxDahFppGqZFlSayTVjCT0ZDBBjqkAblNw3kXXRv4pj2cfRcwyMU451kz96DICLkYc%2BcS53tHTM4nbGTXIYkPlwT9YX%2FgN7sMfw6E4QoR66V17L%2FQ1EIIH40RypPBSybA3qFi%2BCKHU%2FN3LsRT9flGvBMqql0XdgywB5VNkLcbVUCbciMVgZvGhWidhvOEF5g0IKOu1KZc%2B1AcgbtD4tHHRFPAtwwUVS4fEhIwP2LxxxqR9ylgUZcv7T09&X-Amz-Signature=b1a9d7a1edf32afbb6373b4ac71b8bf9dfced43c1c67a2ce7ec2e558de218ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
