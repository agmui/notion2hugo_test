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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDGB6NG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHlHqUGeK%2BnCOT3%2BG7zO4LmuCzrgzYJE82cThC8qhxcAiEA5TQ4wEKuIbFmD1EM6qvzdtT0L0J%2F8AZ9gh52uAbArdUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHWhO3QD6rIp78PHSrcA%2BxbwbGqDaVuvBbFb499MMkb6T0Aj11ISy3gL98wxlUfDYjMq7OmPEb5wTtCb1kuhu%2BSN6pAElA%2BZXNXdpFAsLGq5EQSI2qmbG1vqPc6SkwGUAHSNqXLlqylcSeDxrmLuWH%2BcoP1v4nGdmt5ZVJL1B2SefD3CnLD45b57MUImUz40UG9vs%2BCx6xdf3Jagme%2FEIb%2Bj0wFGFonKVBtyKhNMLCipK%2Bkl08AisNE0v41aNWHCzSwApMzpFjpBGyVMJ8e9DJclgYoOwWgHjkWdQysN89Ns46vGONx7VlmX8OXiWn%2BUpfJ%2Bupzp0zLU8TCPDq%2BHvtWbKBTgJ%2FaT9OctwqYsbAcT8Floc9cxDkjmqk4i4zYKO0j%2Bg3QvS22Sx9Ma5llt4GMoF2Wre9wSgxNV1ZMdtS2daVA1nIN5lMQSJ55%2B%2BhR3ZOBgGi6xvawbMKEJkBaPV628EmCyuVMuii%2FgDpw3acj%2Fj08Gnm8sumDKfJ%2BwreZoXTmBK%2BHIr0xhZarP9OZrEJIBO%2ButnMXPB4ec7qSbIwCy4iGDFETcvC5zKSqNnGhPCd6YhKd5te5E9Fk%2FDNffwA%2Fi4UEvoYXsbFdJXVEMYj2EjaGbdMwpCqzAwfAVgZozEYEtTRrZ2h4qcaVMMC20cIGOqUBcKTRJYDXbCcUEiqirloEPUkR6OW8sxFm4Mz3SVLjnGvz3HiCE03TRa8ZS9Dy9sK7aBUGZqg1JLTe9OXXbWnV55SajO3uV9AGq%2Fpfzjx7F8hPvc25%2FX47LUIhjOKobNe6IePNklKjCYXPccOdyFV2etl1ammpvE02f%2F3GFNIbrXXO0%2BLordG%2Fkottx8scMwnMI3pzTcejJvbGG%2BUURDQoCVD0cl40&X-Amz-Signature=2c7be58e0df91154df6333889cf157f6a28a31e721bc18bb145fb7c105f63e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDGB6NG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHlHqUGeK%2BnCOT3%2BG7zO4LmuCzrgzYJE82cThC8qhxcAiEA5TQ4wEKuIbFmD1EM6qvzdtT0L0J%2F8AZ9gh52uAbArdUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHWhO3QD6rIp78PHSrcA%2BxbwbGqDaVuvBbFb499MMkb6T0Aj11ISy3gL98wxlUfDYjMq7OmPEb5wTtCb1kuhu%2BSN6pAElA%2BZXNXdpFAsLGq5EQSI2qmbG1vqPc6SkwGUAHSNqXLlqylcSeDxrmLuWH%2BcoP1v4nGdmt5ZVJL1B2SefD3CnLD45b57MUImUz40UG9vs%2BCx6xdf3Jagme%2FEIb%2Bj0wFGFonKVBtyKhNMLCipK%2Bkl08AisNE0v41aNWHCzSwApMzpFjpBGyVMJ8e9DJclgYoOwWgHjkWdQysN89Ns46vGONx7VlmX8OXiWn%2BUpfJ%2Bupzp0zLU8TCPDq%2BHvtWbKBTgJ%2FaT9OctwqYsbAcT8Floc9cxDkjmqk4i4zYKO0j%2Bg3QvS22Sx9Ma5llt4GMoF2Wre9wSgxNV1ZMdtS2daVA1nIN5lMQSJ55%2B%2BhR3ZOBgGi6xvawbMKEJkBaPV628EmCyuVMuii%2FgDpw3acj%2Fj08Gnm8sumDKfJ%2BwreZoXTmBK%2BHIr0xhZarP9OZrEJIBO%2ButnMXPB4ec7qSbIwCy4iGDFETcvC5zKSqNnGhPCd6YhKd5te5E9Fk%2FDNffwA%2Fi4UEvoYXsbFdJXVEMYj2EjaGbdMwpCqzAwfAVgZozEYEtTRrZ2h4qcaVMMC20cIGOqUBcKTRJYDXbCcUEiqirloEPUkR6OW8sxFm4Mz3SVLjnGvz3HiCE03TRa8ZS9Dy9sK7aBUGZqg1JLTe9OXXbWnV55SajO3uV9AGq%2Fpfzjx7F8hPvc25%2FX47LUIhjOKobNe6IePNklKjCYXPccOdyFV2etl1ammpvE02f%2F3GFNIbrXXO0%2BLordG%2Fkottx8scMwnMI3pzTcejJvbGG%2BUURDQoCVD0cl40&X-Amz-Signature=210d93caef9b034d21aa7718e83ad5081f29c479a51f2db5bbf6753049ec67a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
