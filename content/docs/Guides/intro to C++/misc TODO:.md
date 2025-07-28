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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIGTKQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD24fIgpgq8KpNK%2FGvBvQkfzhK%2BMGdsbcAjBp1D92r57QIgD%2BLCf0SsNnKvDDRVMkmCR8HUPP7MimFsG1rbPcf1hJUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmQ3XMnRzvSCNJTtyrcA45zpVXuelrKrIr0Yx9odaayqYsjbqpCbJEbGtjW1VhbBIxB0jgVFWE4INX0nsWDicZdMemhRaO3xod5QJygFF9j2KtABGg0P4vWbtVEH7g9x0cAMJFDbOBouBTcwJAbSKE%2FTs8GBJeaPX0BDccVq4mnC59ryAoLiJHx%2F1HECZCKKUC5TzmDXzTsV0QeI%2BBE6%2FCXnO%2BaJNxcEbXgJXgqNOlN%2F0Leg6wxROKlJvE0rD%2F9DupgPSWRJC7wiLxKxfJ1GeSPLgzhr7MOsCX%2BLrHIaxSCkSAjZ5sdqSoadeq24W0MfqcJ%2FDS7JkPUehFu7E6VjTt6FvwBsMVLlrUBpqTTLUaLpHLiWm3bReIZ4eV2KSgYfKlNjcc6TQb%2FzmqxkmQh2AZNsRQDQwwfGoyM1d8yhvNsVa7aj1TtSq7iCphflfM%2F5DUspUuXZvHMfpLqSEQvuF1VHsshKDQHUfIH5QoQiGJtxJaezLfpHYAu4TlX4xCzVkGesoxVJXtqcGS0n0r8q5cllfKz54NNq1KddaArIdft4%2Fsq7Myn5xDBmHjabXfNTAxoxza0Y0hgimITp3yH%2B3F8VCt0oC1IZZHB2I2qkg2JxQdhmWPeWOCWjcS%2B7yayt%2F0Uz%2BRgxi5eTzcPMJ%2BPnMQGOqUB2lNjOADuitS4h8rQfjzy%2FZRI%2BXHL8bh7UTsKn%2FlVbRJtJ9KT%2FThNfDeyEJ7%2FTg5NBvExIRp5vLhWy2CnMe%2FLwau82865v5X4%2BWox5j%2FEKopo7xcV%2B%2Fac6X4cpXW2JuQ6H6QnJUnSglys6qUVMDD3%2FPWzWjo8BYvVPq0qjuvrb2LaKJflt1FRqCzXCUl8d9Bf0uKpohXx%2Bp9%2FY6Iq1C8j%2BtJItB9S&X-Amz-Signature=789693e13dc3c3192151c6c40109f4343299f85aac87305abbd5be40981fddc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RIGTKQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD24fIgpgq8KpNK%2FGvBvQkfzhK%2BMGdsbcAjBp1D92r57QIgD%2BLCf0SsNnKvDDRVMkmCR8HUPP7MimFsG1rbPcf1hJUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmQ3XMnRzvSCNJTtyrcA45zpVXuelrKrIr0Yx9odaayqYsjbqpCbJEbGtjW1VhbBIxB0jgVFWE4INX0nsWDicZdMemhRaO3xod5QJygFF9j2KtABGg0P4vWbtVEH7g9x0cAMJFDbOBouBTcwJAbSKE%2FTs8GBJeaPX0BDccVq4mnC59ryAoLiJHx%2F1HECZCKKUC5TzmDXzTsV0QeI%2BBE6%2FCXnO%2BaJNxcEbXgJXgqNOlN%2F0Leg6wxROKlJvE0rD%2F9DupgPSWRJC7wiLxKxfJ1GeSPLgzhr7MOsCX%2BLrHIaxSCkSAjZ5sdqSoadeq24W0MfqcJ%2FDS7JkPUehFu7E6VjTt6FvwBsMVLlrUBpqTTLUaLpHLiWm3bReIZ4eV2KSgYfKlNjcc6TQb%2FzmqxkmQh2AZNsRQDQwwfGoyM1d8yhvNsVa7aj1TtSq7iCphflfM%2F5DUspUuXZvHMfpLqSEQvuF1VHsshKDQHUfIH5QoQiGJtxJaezLfpHYAu4TlX4xCzVkGesoxVJXtqcGS0n0r8q5cllfKz54NNq1KddaArIdft4%2Fsq7Myn5xDBmHjabXfNTAxoxza0Y0hgimITp3yH%2B3F8VCt0oC1IZZHB2I2qkg2JxQdhmWPeWOCWjcS%2B7yayt%2F0Uz%2BRgxi5eTzcPMJ%2BPnMQGOqUB2lNjOADuitS4h8rQfjzy%2FZRI%2BXHL8bh7UTsKn%2FlVbRJtJ9KT%2FThNfDeyEJ7%2FTg5NBvExIRp5vLhWy2CnMe%2FLwau82865v5X4%2BWox5j%2FEKopo7xcV%2B%2Fac6X4cpXW2JuQ6H6QnJUnSglys6qUVMDD3%2FPWzWjo8BYvVPq0qjuvrb2LaKJflt1FRqCzXCUl8d9Bf0uKpohXx%2Bp9%2FY6Iq1C8j%2BtJItB9S&X-Amz-Signature=67de9a9b39bdf0940e5f05cfe42d5670a5faf80089290d1d64fae18759a8f975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
