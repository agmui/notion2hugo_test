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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3QDYEC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIF1KmQ8lSG4yOTcPKiIETEc1HI21lizjx%2BbZ9GyI%2F8ihAiEAsDw4QaN%2ByKUmMu8K5hFNcKGu8yvTgkpietrhxc%2BfHNwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJHEKNtIhsCZncw0nircAxRJ0wUNNyOa7NBigcclifSYkEgvF103EtB157Wmqisz1L%2FjW2tNs36QHB%2BznYXps2mBUmwT5somabApiYWYLu7nv8sFldDDylWjQlf6ZYybTOARNbK6%2FrBK29a4plbonVc0AbSGc7fIY1K7l8Ho%2FBtAWWytMxO9S1p1ULfRb8rjUMpooOnxTWVlrXmCREVA4d%2B7Pg21g085%2FfDQnaTiLQC%2FNJol01KRlmhStxrpNL9F3UQRhrKTK9ywybauIgrPCpHB1mbMEUzgD0v1jLUJ70ShtdeKcj%2F9OG6c%2BQl8HIQs6yhst6fDhD4dsEAqDQLOej4UT4vsH1xUMJsMmY6v9eaSmY6MoV2FHjPTu4hr65tWD9k6sKAxM2X7Ac98ESW9nrKFc4HFklTVJdq8nzesz%2BVnvWiDnUP8Sl5f%2FskCUz65AImAVIsG%2F65AX62qEzhkVyYsI6jb49F0Z24D%2FvLKkjA5jEPPgk47Ro2D%2BzvvV7a8by6FDq7POPrFTxljpX99FmUtUBZMDUaTXkBvam0vkcMkVC1uSeCijrtEg4UkpzxSAjFjE7YknHG6Oh6brWnEHF0WqJC9vNsmDsDuMpcXUEH%2F24KlrXinhirHCnVJMy6E4dUSP19sOrxxHsXlMIH1zcEGOqUBD7hXs3Cu0yqfwz6P7Fj7kId5N6V2UifYIqeRCwUaKfVIK8iKg6%2BEYecPlXq%2F3TWL0KgGz3lxlWbzH7zKvCkS8LxJBTWJtA00BKuuYBp755keOCu4h47HLO8LZXX%2BZZWA8JPBZtcsB3AARq3Kv8HyeQABoOcVPTpU1pmjFF7uh%2BXAj%2FtPP235Qc5EOcnLYaARhg09fOFBuwtqJKe6Qil%2BUpo2n8rM&X-Amz-Signature=f47b501dba239110edeecf7ea079e02185ae604418fc7e894212fda1be310ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
