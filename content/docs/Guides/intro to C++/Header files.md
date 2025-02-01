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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNLVEJU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5xTyTxOwGLRGnbQ13vdcYMUkmz1liwbILPCMTVnJJbAiEAjU59W0cnKp1QKMWaUquQL542BOAqcg8DWc5vqwdKAIUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEMqXNwAFL7hSk%2FBCrcA18kga01NBshuaOTauCx2iMjLCDtbjRTrZFrFOm832indBhDGY6bgkeIelcerjeP8d4BE1HgZDW%2FAFgrvAu72gWSlZvgDwEJAnaFC%2BncafbcjvCXpTD%2BzYntOGuIaogNPdIE2rczCXFW2M7IfEntSiUweTT%2BjRnq3IScctOYoALfJ8SRp6nyvGarS3%2Ba0BD8yyxI9Iqra70FmtRNZETqnlhJ9GK9JCuSCFZ91AJSZwFgeSZvhqm2YjOipNb0r1lQp9POorLGncOLNkHyXUURbo3mnsYuhyXdDbkA3FPRS0O1w2alZf%2FJcIBK9NykVaWdQQ%2F4GFjt5s%2FroUJVtKbOyRum4au%2BsAq5hHrbPbORkmp5%2F7H8wkcRcHNvjT%2BuRm39FhSQDv4QUtvviicJOx%2BW33%2BCDlqDEf0nBlNku9pwIRn7blHpOiyfLOwuiMY7xGuRA0VhGZM00nTI4l0MQSw3wB7xpSzgPXEYhBtAN2SemH26pfMSOOVsxWmj19TIPA%2BfaM8q6ItJfrOGzY6QTQjaTGoIvshcim5ownsuytFG4v%2BO%2BS63qT3mAZbmcMDnI6AEIW8s5B94pAXoG5qVfHFdw%2FF8a%2FRABoA4zsAACEi282wvb3PNTnkaidX8dA3sMMql97wGOqUBvNlXdrU5ehGiaxDfhVLXOTOc2bVxBRNPJ%2BcskTc4QEW6cxU2LnC5lM41cW70nqvlhABoKiCc0mVWmAQX%2Bt8KCtv3WAa0%2FRIa%2BgU9xJLJ7o5uIlX%2BnrFQlALFs3eUg8gLDEACum7wP4do54ozbFF3I4aaxbTOBHTuaZsCg1v5aRrePse4I1tgOi1VxAgFffJJ%2FeHSooO0SAZ%2FtnUn8Mm%2FwrrExjo8&X-Amz-Signature=1e7de024f9facbbd7d6ef712b1620c6a0822312897f43b28ce4de884fc31486b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
