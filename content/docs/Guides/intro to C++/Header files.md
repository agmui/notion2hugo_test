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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6Z4HDN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnKRYVFHREOxaEd4uN86YsN5wSYgaDNXlRTavqLlcOywIgaXfi1xDMvsJ%2Bw%2FFQGPDGrxHETZCxqN2RXFRPEJjXmBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcM7K7HG9QPBNo1ASrcA8NjrvZYXxEXXTbMjNroMtmI4Nh9tuOaeBDceCYux7Ko8kTz9%2FEoY0g2%2FiEJW7jmj99UOXynhh6RrYbWQ0A3rSkoeV%2BIcZYY5P3TkwHe5K7QEX8ZlVEmIm0awVzZpdqWjoDSX8n08IfCvwGPQoTk2qnbreN3ZXO7pth%2FvY7WFBQnoMsAdAftXBDl6uMOsEQEeeTeMeCpeD%2BHU%2Bc6CQDwXgakgTJtSK6mymKIMtDwkbie8Q3e7Tf5x8HpaPZmefBpnHr3TnLGZZPpAJYIcF1HRgaEVsy4BSvoVzEvchXE%2BB7KbH%2FCFX6wx4eMukqKxPz%2Bf2Zs%2BHrXzpzF0FPgh1BCzUfXHJwg%2BbsZqGTNrdEiA%2Fv9GOqWpWfG2SLc3W4tlTe1h66Yfzvxg7tGNUfnzcDj7eZl0IR8WaWDNhXP2s7Fiw8LmkUPIfozXHtZknk18DG%2F0xkn7R75H5oV5k4TSuFGQtjJAnFJvAFP6X%2FCk4Qtqvjq9kJJVyrUBDYfW01wXB3%2F8uxq1pbgwjiE%2Fimq%2FpbRu9Gbz898tlHhrmFEq0mBopswLHZH41MQkK%2FQD0C60u5LjM5VNQh8o1%2F2lMXh%2BrhX6hHwS3z9hDgc2q1y%2FNUeWcODKucpXmPIEQpNnPByMNif4r0GOqUBWAZS9RuVW%2F1BOwlgip9A0IjMABxFRGN3LLQ0Td9hDHdqXPP9EdkZkoMZWWnMpHEQbml%2FzTgC6m5uF6uROkHxk%2FSWNY1ju%2BXuO48SjJJ3fsRKgps7JyaC%2Bwr5R0Y5xWHwkB3XNzcIFzamQ16d5b3RVnSn3QUgptxOJ09Jrkk3ZCRDsVYdFPUXQDY5lAaFMSCKPJqPBIlgqgbFT2MSbsUdDpf3HFEw&X-Amz-Signature=2f1205df93640ba6c5d9222006c327ad124b1a5b68d3ebfdea75cc24905e3c31&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
