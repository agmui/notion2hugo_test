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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3G3XQG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmd%2FEIa4a984hamtE6OQKwSZi%2Fl16zDZwTfNuKQM9j%2FgIhAPXeD7WQDXvh%2Bq4zxRjZOSfgajUE0Tb6ArIHvbNSbv4iKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSdRgDoytpASM3Q7kq3AOFlQtwXBB%2Fn6j0Az%2B%2B4ogpMQhnhTsBk7rc9VoUIMgBLHkSfKO8h1BNQO8BdpvyUybLOfrJjCvhQ%2F4Pf9wkb1ySRZF5%2BTvZKqz6VLbA4DHS65iSIM4FYKmZxoO1squ5X3a0nVGC%2BJNjPDz6GjpIoTaW8BIq1rGmdaHNXPGRnZ91VlJcDqRPQHENT%2BOJ%2BgTbwyfV%2B6NdPiuxSU6BW7LD0L9VbWpQQDn%2BOqhQ2oNd8kAsYes8AxfHnlZTtr4LXkAFthqVP6BXXNs3oeK%2FRuaXkDj8z5pOtBoDE36gG2YuUlWtKo3jTCmt0bZs69APuJlWsevL16b%2F%2FilZRcDQUQNHZp29oXER8q2uOi2W6F8htFqXSoEQuE6DtdlJe1WwZFcioI8LibIcs1xA9xZf31ernqRyLMHgdY6P%2Fj6ipbaV22Yl9SE7AwHFaXbaOKO25%2Bjx9RPoYWtM8%2BBtr%2B3GIs%2BAEmw9VDajX2I%2BYRvEgBlaqNHosDyg%2FcW4Q%2BdmKoFU529Rrd2HEAIz9snVGOqy%2BGOjBymnezoHRbVFrOpHtXYsRTXd4xzT9ywN%2BidHOLagQAX1WJwZVqfno0CjRR9SHVFVKYJdYMPxw5FPaCMLd2kqJBIldjLXoAXI%2B4bLgUkXjTDwoaC9BjqkASj3CUCD81QwN74kauXzWBtFMKSdsZh1QZ5PzFD5efo4hVCoJCTnELyAOJMD1hiY6vJ1Fjz41RsozPOrdL5gCBuJLE12o%2BE0BGWDgi7n05Julw95D%2BRgWXPi%2BFOym3OjZpf3Vj5SNAwDunac7fePcWUSFZOl9Hr0hfJ2SPv6yMClvgrteTYHXmuICzmwYaf0HqQ605a8m%2BRegIGlwt5LlKau%2Bnuo&X-Amz-Signature=94a55b7c826d41972aa5851d43eacfc5f1ea39de9a17a2503bf2faf6d9b4b29d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3G3XQG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmd%2FEIa4a984hamtE6OQKwSZi%2Fl16zDZwTfNuKQM9j%2FgIhAPXeD7WQDXvh%2Bq4zxRjZOSfgajUE0Tb6ArIHvbNSbv4iKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSdRgDoytpASM3Q7kq3AOFlQtwXBB%2Fn6j0Az%2B%2B4ogpMQhnhTsBk7rc9VoUIMgBLHkSfKO8h1BNQO8BdpvyUybLOfrJjCvhQ%2F4Pf9wkb1ySRZF5%2BTvZKqz6VLbA4DHS65iSIM4FYKmZxoO1squ5X3a0nVGC%2BJNjPDz6GjpIoTaW8BIq1rGmdaHNXPGRnZ91VlJcDqRPQHENT%2BOJ%2BgTbwyfV%2B6NdPiuxSU6BW7LD0L9VbWpQQDn%2BOqhQ2oNd8kAsYes8AxfHnlZTtr4LXkAFthqVP6BXXNs3oeK%2FRuaXkDj8z5pOtBoDE36gG2YuUlWtKo3jTCmt0bZs69APuJlWsevL16b%2F%2FilZRcDQUQNHZp29oXER8q2uOi2W6F8htFqXSoEQuE6DtdlJe1WwZFcioI8LibIcs1xA9xZf31ernqRyLMHgdY6P%2Fj6ipbaV22Yl9SE7AwHFaXbaOKO25%2Bjx9RPoYWtM8%2BBtr%2B3GIs%2BAEmw9VDajX2I%2BYRvEgBlaqNHosDyg%2FcW4Q%2BdmKoFU529Rrd2HEAIz9snVGOqy%2BGOjBymnezoHRbVFrOpHtXYsRTXd4xzT9ywN%2BidHOLagQAX1WJwZVqfno0CjRR9SHVFVKYJdYMPxw5FPaCMLd2kqJBIldjLXoAXI%2B4bLgUkXjTDwoaC9BjqkASj3CUCD81QwN74kauXzWBtFMKSdsZh1QZ5PzFD5efo4hVCoJCTnELyAOJMD1hiY6vJ1Fjz41RsozPOrdL5gCBuJLE12o%2BE0BGWDgi7n05Julw95D%2BRgWXPi%2BFOym3OjZpf3Vj5SNAwDunac7fePcWUSFZOl9Hr0hfJ2SPv6yMClvgrteTYHXmuICzmwYaf0HqQ605a8m%2BRegIGlwt5LlKau%2Bnuo&X-Amz-Signature=1e0c13c6dc12ab130c7294961b9ed6cfba881ab179529b9d02cde6d33b73f200&X-Amz-SignedHeaders=host&x-id=GetObject)

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
