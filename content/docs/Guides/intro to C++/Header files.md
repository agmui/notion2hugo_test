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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASHSY35%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0K4IR24DGlln56nfhZ9l9fXxZJqxsBlYjpAXi%2BrhdnQIgReIwY8vwRdw9fEYSI%2BMZOaeir6qNaveL4i7pZeogoRQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJHs2IPZ0%2BbBaYEZPyrcA0ra6Cp%2Fc1BYkS46TU7Vs1kBrMpHacb6wuS%2BlUZEJWPCWL2TRemXZZ9l9%2BgfTXZaVnYX8DfdvIeZZKfz9pZGN1lqYBvJxUtEhAPN2pALGVg41S6KcxdRVwaDzC8iOLsJOUB3r2OCEWPNOXJb%2F87a%2FSfhGAAufsirRkGV2i6EOKOcdWeQ3za2fepeTYylSK2kQeI5SDz5JojecLjcMFrkDoBwFmH8QOAhi64JfVbqyDnPftQB%2FRrNuiPd11FF2goQLqw9WOESKR1ftk7%2FSZ2aSA3zip1B4FFUmq86BEQXCMnONHO04nGg9Tk48FsgE70xS3Ch82j7ipnRnfVODIbqAFDcwoumo44Si47gM9i%2BAmOR0Xck%2FblTcws63WH9YHPK3DvtcJ%2BWLf6hLDccDHtLzKuDe16586SD85BRpwrc197PwMI61rZf5R9RxsqXYKi6PPe%2BYrbeBr%2Bvx7D8cAcNPjSm8uk7860t6Kb0k5Jwbl17dSVxAls9NFfo%2FJbZxnmkJuJQWPKrSeGoI5koGuf0wqUemcIrKGFE3Yfv1qV7t13VFMIokefFd9gdu4ZIvfVZHniRTL2KjdrjWfhWAl3CP7VCKzI9bTPBJgBXpy5QzgH0bToT4%2FNh%2BHXi8b0SMLH6j78GOqUB7rH03dmVDOQqA4er1zWSDb3ebfxE8Yo%2FejxnqZJg9haFuH2dbaw06EBXfnqaSNqMcl8tU6%2Fcm%2Bcq8Wl9bfDb2Hrd7kNgIh0xxtXVIAIkNTzzF5rlySkhFfTsNdvEmKT3hhMm%2Fz%2BSO3JmmpBKeDtcW0N1PpF9bI1zKN4w3UWEOqwd%2FZP1mnsZWZPY%2Bs4L2yyicBatYPW%2FlkwcRQjjXa1A26dLlGbh&X-Amz-Signature=07bc62284d1373231bac93a9dafa04be495bb3bac61ee7d8d438f5c43045cf2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
