---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGAYITZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvr9gY%2BBMK0Q2mVO2TfisRsCMGgsP7Tb3WvTVQGkX1ZAiEA0fO0Gn8ziCVjsAdIDqpDii39IUm7GHar5of5f7SKdAwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5Fq7MZsfT1c6iAaircAwm5YM%2BqqU22SssnavXVQnqW3CNGRBH8T%2Feh4Va3LzKauo%2FsX1zOawu17ggec%2BMPUjQTZT3bUHvBAs8zsP7hjFGsKoh2qmcUDweksdavb5yEPj6%2BdRlpPSlleY%2Fofn%2BRAfwXkP7%2BCa9Ck6aND990iSSfDxSMTn%2BSxXrcoiVeX4xhFjEvuL302F5wFEg5VFoOlUiMV9o7USZR6baeb%2BytYVGN15WQ1XSDvFH3mwX5hyf7XcqUiUBEsnD341owpeq%2FRGkhWhlolNiY8YVUODF9ClJ5NlraFa6KRpu2Qw5vVzUmBo7Dyh0C0iCPFuKAAcMVtw4ArM2EDllMD9tGvyUitZSR9N0ahhn2ypdYruDqDT0bMMZv2IsQkFJ25jbhqpkHGmKwQd9Kf2dNBqgo8SWj6N%2BW0TWIDANqfYaR1KWFf1mATr2vy7MDdhS4DFFrh10RgEulRhzUvQXpMt3IUeuTAQZLOe%2FdE063PRdT82Di%2BCzno6As6OUCTtjDyAquS757m80n9NNPs83q1lfWPwhihjlyiVKPpmZeKOd2wLkB64mfcLAX3zfJH%2FuIseVreW2naOsOGtuAxW1fZnMtx6HnHMJwbKv8W8ABf1kREbLbOyEnZEnUuplM1pd3osKrMPHDkMMGOqUBdDAHJUxC%2BbMoKz1orVsTY92p9sqr1AtYm0kPcg6KYYEuoQJ3QeIQAVoqGlxzHeDHufByJp1kqabXfJYUHic19WLzNtLemvbJgOFwdQtICEIo1uhGES8Tu3DtKBOdT3WNnX%2B6yPBpvp2AtcSyWnL5P4PdrhTYOmyNU2uKW7fUWvh9oZv2fa9RlWBuDuMxUtGZImLpodUKPl6rxryZHCrHZG6lK4RZ&X-Amz-Signature=a30eb2186e9de81ce69472c69d635ba19faf4d8be0e848c3a8f1b29b55d7e644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGAYITZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvr9gY%2BBMK0Q2mVO2TfisRsCMGgsP7Tb3WvTVQGkX1ZAiEA0fO0Gn8ziCVjsAdIDqpDii39IUm7GHar5of5f7SKdAwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5Fq7MZsfT1c6iAaircAwm5YM%2BqqU22SssnavXVQnqW3CNGRBH8T%2Feh4Va3LzKauo%2FsX1zOawu17ggec%2BMPUjQTZT3bUHvBAs8zsP7hjFGsKoh2qmcUDweksdavb5yEPj6%2BdRlpPSlleY%2Fofn%2BRAfwXkP7%2BCa9Ck6aND990iSSfDxSMTn%2BSxXrcoiVeX4xhFjEvuL302F5wFEg5VFoOlUiMV9o7USZR6baeb%2BytYVGN15WQ1XSDvFH3mwX5hyf7XcqUiUBEsnD341owpeq%2FRGkhWhlolNiY8YVUODF9ClJ5NlraFa6KRpu2Qw5vVzUmBo7Dyh0C0iCPFuKAAcMVtw4ArM2EDllMD9tGvyUitZSR9N0ahhn2ypdYruDqDT0bMMZv2IsQkFJ25jbhqpkHGmKwQd9Kf2dNBqgo8SWj6N%2BW0TWIDANqfYaR1KWFf1mATr2vy7MDdhS4DFFrh10RgEulRhzUvQXpMt3IUeuTAQZLOe%2FdE063PRdT82Di%2BCzno6As6OUCTtjDyAquS757m80n9NNPs83q1lfWPwhihjlyiVKPpmZeKOd2wLkB64mfcLAX3zfJH%2FuIseVreW2naOsOGtuAxW1fZnMtx6HnHMJwbKv8W8ABf1kREbLbOyEnZEnUuplM1pd3osKrMPHDkMMGOqUBdDAHJUxC%2BbMoKz1orVsTY92p9sqr1AtYm0kPcg6KYYEuoQJ3QeIQAVoqGlxzHeDHufByJp1kqabXfJYUHic19WLzNtLemvbJgOFwdQtICEIo1uhGES8Tu3DtKBOdT3WNnX%2B6yPBpvp2AtcSyWnL5P4PdrhTYOmyNU2uKW7fUWvh9oZv2fa9RlWBuDuMxUtGZImLpodUKPl6rxryZHCrHZG6lK4RZ&X-Amz-Signature=d70d61c6903285064af44ef7f7058b03927fa67c9b91bda0f295c241bd9ed715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
