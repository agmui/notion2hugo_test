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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q3XWMKS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCwOcZ4f2iFNmq4tj2P%2FdPa7R%2B4WMt2%2BRdMVFCSxbW9zgIhAM2OcbjcpuaTeTwy273QuNTBjlE7bzZyIorsV5kK17GgKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzhf%2BHlg4M099tRtoq3AMwU8Xi5YSSKsbbjzORTBbsWiF7IiBOtJ3cMN3pj9e%2BUEyISFeFi5YARGNsoJp%2BdWGLWRKambq5MW3ebfnkVts%2BTDCVSradpcZ%2BAxY6ElzNpErxn6izn5qOwNagvenSgcuuTfM2yHj0JpEUTs%2FBWeWQdx11ZTBgVn6%2BSg0Q7c9XbNmPYXZGhIFy%2FsnKgUktRoH5gWfamtJ03wZkhwm0rBwfDnDhsIOgEV6pq9ni9Ts1ouPUx5j013bf%2B%2FsKU5tmR5Rea2Z1ocN51wU24Wsbkq5ASc1Q6B0H3Get7%2Bvlofe%2FvoUjpEu9crP%2Ba7l3xwd9ujzovxeE89%2F9iMHyZEllt1I00Bh0LD%2B54nzoKUDJLYU3DvERyH1K8F0tX9eJ8%2Fb5%2F7KPK5treUIvBtk5nSW2DKzkRDIclH77esFCFzMjq5%2FF6KuLjrAFyRCQgRJscv5GMu1Pt0C5aT9iefM%2FYAGdnAJJsPwKsuhHkXHfw%2Bg%2FcRslxwbsrSpmvMZA4YeKpgWGk04gmN4L2zIYlM2ux2uB7Dw7EBOX893WszS9Q0iZK9G1fQ33cD0COqqQqIcKQKnpwkBmIvIkrYvPhMhPA44Up0PPkF%2FAKLNzSxz4ZmJ968Ffl4wC0oq2ZlK64Ls9CzD0%2BdLEBjqkAZ34kYTWKo65Rzp7R%2BieiDBiXrtMBWNymZiNpQ3cVN8M2N%2F4SCSOXY%2B9mj0p%2B2Y98alpuArWBUZ2u2R7DZcpMQ5fycgD6NC%2BD9btw4prKI2Bq7ftn1LjY0HbjUps8PH8RkS6JgGo5L34J%2FuHCezqXdImW%2FYkCxb7AE%2B7x33EnQIdHsi%2FDEetuIS5LqIHH3obRQ41qnU21%2F5natPd%2BUF0HQVeC7L%2B&X-Amz-Signature=8d47880093c52c9a08f062eb75ee7b07ce485fe48aae16bb77558d569eece962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
