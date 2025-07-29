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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML46Q6X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICOEY8H1UDzo29GIU%2Ba5qjKdA1oAds4dqmhhJBqzyDcAAiBd4sHIYFPf7Cu4TvjLtSaLtB9gVFncsvAEI1pyG6siFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkv0OIzZwvReHYkXOKtwDiGPrJvnBX87gCGGpdRHcCiyAxvrxctpU3ihVB%2FhHNwBV%2BX6nO5wHqx1LnS9sXl58tWZRI8u18X6Ua3%2BVU9Vv4LY0z2%2Be3McW%2B1SMqaQ9EHl6EdmCcX75FXgPOzlbNQMsQDdN3G8Mh6a3hX%2FcMslAX2seN23w3JUIohan2xXmdE0UidhWpYhtCZk8rXuKPsqyOg7Qlv4tfDZ%2B4BNw8RUHOZ9uCx2k39e9FWvftqeQL8vipSlTLjMBToe3fYmW19TciaXpeH1m5ZuvvaZyF1L8nNe8sM%2FykNKOzScX0aao5egkfLgAdehkaKKhd%2BXbXagEO61bbD3LziUOBizW2kuuPFcJaq1oPsCQRmB2G1G17j4BVJ%2BuiL36zvMz6j9JTGEBDjXCi22X2FFRyFIrgLr05f6kpcI1v47URXBGVmD1xd4bQKBQ9b%2BCDXpGytwg09FezaUPmWjvtNEMxuz3eWxeU3lwfoCB7rGmLmItEX7gwgXcFFu5mxRiwDsu1GU7gjMOZelgMFdhtgXOJ%2BsW8rUKjNhClQQ8WfI0wvhc798VXbfT%2FsotSkh1DaEkkiTwB%2BlL7R5vh22v%2FVG47anWaAZ8DHdMJ0phwjnucjXF0lxqYL%2Fi%2BW2ApqgBZ%2FgcuiowyZ6gxAY6pgFVTiRYydOP3brs%2BlykH6fHtHzE9fqzASc0968PnJNxAAzVeqv4AwywuEK5khsRE47mbN%2Fv5jA9Il10B42%2Bywh1bvJMLUih8tGmGBGhQ3HUTQOQOG1L0Gp07gQkL%2Bl9d%2FXgzsmYP%2FNyoA%2BsRJ3Gy6mpyInGp6%2FPYYb%2FNLDDI06lOx4DFftYl43y0QHgL37oFUc9VIh8aZjJMgS4VW59yASuvQ3jsG98&X-Amz-Signature=4b5bf8be2c081aedb4941d54f3266b5ccb9b2e6d317fba45d2ab6b34d3115434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
